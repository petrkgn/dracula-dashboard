import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestParameters } from '../interfaces/interfaces';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  public createApiRequest<ResponseType>(
    requestParameters: RequestParameters
  ): Observable<ResponseType>  {
    return this.http.request(
      requestParameters.method,
      requestParameters.url,
      requestParameters.options
    );
  }
}
