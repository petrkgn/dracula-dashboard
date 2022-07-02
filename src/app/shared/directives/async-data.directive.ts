import {
  Directive,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { Observable, of, Subject, throwError } from "rxjs";
import { catchError, delay, takeUntil } from "rxjs/operators";

@Directive({
  selector: "[asyncData]",
})
export class AsyncDataDirective implements OnInit, OnChanges, OnDestroy {
  constructor(
    @Inject(ViewContainerRef)
    private readonly viewContainerRef: ViewContainerRef,
    @Inject(TemplateRef) private readonly templateRef: TemplateRef<any>
  ) {}

  @Input("asyncData")
  private currentContent$!: Observable<any>;

  @Input("asyncDataPlaceholder")
  private placeholder: TemplateRef<any> | null = null;

  private isContent: unknown;
  private subDestroy$ = new Subject();

  ngOnChanges() {
    this.isContent = this.initCurrentContent(
      this.currentContent$,
      this.subDestroy$
    );
  }

  ngOnInit() {
    if (!this.isContent && this.placeholder) {
      this.viewContainerRef.createEmbeddedView(this.placeholder);
    }
  }

  private initCurrentContent(
    currentContent: Observable<any>,
    subDestroy: Observable<any>
  ) {
    currentContent
      .pipe(
        delay(2000),
        catchError((err) => {
          // console.log("caught error and rethrowing", err);
          return throwError(() => new Error(err));
        }),
        catchError((err) => {
          // console.log("caught error, providing fallback value");
          return of([{ title: `${err}, try later` }]);
        }),
        takeUntil(subDestroy)
      )
      .subscribe((content) => {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          $implicit: content,
        });
      });
  }

  ngOnDestroy() {
    this.subDestroy$.next("");
    this.subDestroy$.complete();
  }
}
