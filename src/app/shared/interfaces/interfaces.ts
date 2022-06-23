import { HttpHeaders, HttpParams } from '@angular/common/http';

export type MethodTypes = 'GET' | 'POST' | 'PUT' | 'DELITE';

export interface RequestParameters {
  method: MethodTypes;
  url: string;
  options?: {
    body?: unknown;
    headers?: HttpHeaders;
    params?: HttpParams;
    observe?: 'body' | 'response';
  };
}
