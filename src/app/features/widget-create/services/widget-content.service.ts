import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RequestParameters } from "@shared/interfaces/interfaces";
import { ApiService } from "@shared/services/index";

@Injectable()
export class WidgetContentService {
  constructor(@Inject(ApiService) private readonly apiService: ApiService) {}

  public getContentFromApi<T>(
    requestConfig: RequestParameters,
    responseAdapter?: any,
    contentAdapter?: any
  ): Observable<T> {
    try {
      return this.apiService.createApiRequest(requestConfig).pipe(
        map((responseData) =>
          typeof responseData === "object" && responseAdapter
            ? this.adaptResponse(responseData, responseAdapter)
            : responseData
        ),

        map((responseData) =>
          typeof responseData === "object" && contentAdapter
            ? Object.keys(responseData).map((key) =>
                this.adaptContent(responseData[key], contentAdapter)
              )
            : responseData
        )
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
