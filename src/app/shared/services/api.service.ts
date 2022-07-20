import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RequestParameters } from "../interfaces/interfaces";

@Injectable({ providedIn: "root" })
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  public createApiRequest(requestParameters: RequestParameters) {
    return this.http.request(
      requestParameters.method,
      requestParameters.url,
      requestParameters.options
    );
  }
}
