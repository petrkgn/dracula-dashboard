import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { RequestParameters } from "@shared/interfaces/interfaces";
import { ApiService } from "@shared/services/index";
import { transformResponse, adaptResponse } from "@shared/operators/index";

@Injectable()
export class WidgetContentService {
  constructor(private readonly apiService: ApiService) {}

  public getContentFromApi<T>(
    requestConfig: RequestParameters,
    responseAdapter?: any,
    contentAdapter?: any
  ): Observable<any> {
    try {
      return this.apiService.createApiRequest(requestConfig).pipe(
        // map((responseData) =>
        //   typeof responseData === "object" && responseAdapter
        //     ? this.adaptResponse(responseData, responseAdapter)
        //     : responseData
        // ),
        transformResponse(responseAdapter),
        // map((responseData) =>
        //   typeof responseData === "object" && contentAdapter
        //     ? Object.keys(responseData).map((key) =>
        //         this.adaptContent(responseData[key], contentAdapter)
        //       )
        //     : responseData
        // )
        adaptResponse(contentAdapter)
      );
    } catch (err) {
      throw err;
    }
  }
  private adaptContent(responseData: any, contentAdapter: any) {
    return new contentAdapter(responseData);
  }
  private adaptResponse(responseData: any, responseAdapter: any) {
    return responseAdapter(responseData);
  }
}
