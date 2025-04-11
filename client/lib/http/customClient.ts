import { EXPO_API_URL } from '../environment/environment';

type HTTPMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'PATCH';

class APIError extends Error {
  status: number;
  statusText: string;
  url: string;

  constructor(response: Response) {
    super(`HTTP error! status: ${response.status}`);
    this.name = 'APIError';
    this.status = response.status;
    this.statusText = response.statusText;
    this.url = response.url;
  }
}

interface RequestOptions<D = unknown> {
  url: string;
  method: HTTPMethod;
  params?: Record<string, unknown>;
  data?: D;
  responseType?: string;
  signal?: AbortSignal;
  headers?: HeadersInit;
}

export async function customClient<T, D = unknown>({
  url,
  method,
  params,
  data,
  signal,
  headers = {},
}: RequestOptions & { data?: D }): Promise<T> {
  const fullUrl = new URL(`${EXPO_API_URL}${url}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      fullUrl.searchParams.append(key, String(value));
    });
  }

  const requestHeaders = new Headers({
    'Content-Type': 'application/json',
    ...headers,
  });

  const requestOptions: RequestInit = {
    method,
    headers: requestHeaders,
    signal,
    body: data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(fullUrl.toString(), requestOptions);

  if (!response.ok) {
    throw new APIError(response);
  }

  try {
    return await response.json();
  } catch (error) {
    if (response.status === 204) {
      return {} as T;
    }

    return { status: response.statusText } as T;
  }
}
