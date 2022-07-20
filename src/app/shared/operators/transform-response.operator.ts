import { map, Observable } from "rxjs";

export const transformResponse =
  (handler: Function) =>
  <T>(source: Observable<T>) =>
    source.pipe(map((response) => handler(response)));
