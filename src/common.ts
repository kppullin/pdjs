/* LEGACY-BROWSER-SUPPORT-START */
import fetch, {Headers} from 'cross-fetch';
import {AbortController} from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import {isBrowser} from 'browser-or-node';
/* LEGACY-BROWSER-SUPPORT-END */

const VERSION = '2.0.0';

type QueryParameter = Record<string, string | Array<string>>;

export interface RequestOptions extends RequestInit {
  queryParameters?: QueryParameter;
  retryCount?: number;
  requestTimeout?: number;
  retryTimeout?: number;
  timeout?: number;
}

export function request(
  url: string | URL,
  options: RequestOptions = {}
): Promise<Response> {
  const {queryParameters, requestTimeout = 30000, ...rest} = options;

  url = new URL(url.toString());

  url = applyParameters(url, queryParameters);
  options = applyTimeout(options, requestTimeout);

  return fetch_retry(url.toString(), 3, {
    ...rest,
    headers: new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      /* LEGACY-BROWSER-SUPPORT-START */
      ...userAgentHeader(),
      /* LEGACY-BROWSER-SUPPORT-END */
      ...rest.headers,
    }),
  });
}

function fetch_retry(
  url: string,
  retries: number,
  options: RequestOptions
): Promise<Response> {
  return new Promise((resolve, reject) => {
    fetch(url, options).then(response => {
      // We don't want to `reject` when retries have finished
      // Instead simply stop trying and return.
      if (retries === 0) return resolve(response);
      if (response.status === 429) {
        const {retryTimeout = 20000} = options;
        retryTimeoutPromise(retryTimeout).then(() => {
          fetch_retry(url, retries - 1, options)
            .then(resolve)
            .catch(reject);
        });
      } else {
        resolve(response);
      }
    });
  });
}

const retryTimeoutPromise = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

function userAgentHeader(): object {
  if (isBrowser) return {};

  return {
    'User-Agent': `pdjs/${VERSION} (${process.version}/${process.platform})`,
  };
}

function applyParameters(url: URL, queryParameters?: QueryParameter): URL {
  if (!queryParameters) return url;

  const combinedParameters = url.searchParams;

  for (const key of Object.keys(queryParameters)) {
    const parameter = queryParameters[key];
    if (Array.isArray(parameter)) {
      // Support for array based keys like `additional_fields[]`
      parameter.forEach(item => {
        combinedParameters.append(key, item);
      });
    } else {
      combinedParameters.append(key, parameter);
    }
  }

  url.search = combinedParameters.toString();
  return url;
}

function applyTimeout(init: RequestOptions, timeout?: number): RequestOptions {
  if (!timeout) return init;

  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);

  return {
    ...init,
    signal: controller.signal,
  };
}
