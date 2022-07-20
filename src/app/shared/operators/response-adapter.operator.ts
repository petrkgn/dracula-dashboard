import { map, Observable } from "rxjs";

export const adaptResponse =
  (adapter: new (arg0: any) => any) =>
  <T extends { [x: string]: string }>(source: Observable<T>) =>
    source.pipe(
      map((response) => {
        return Object.keys(response).map((key) => new adapter(response[key]));
      })
    );
