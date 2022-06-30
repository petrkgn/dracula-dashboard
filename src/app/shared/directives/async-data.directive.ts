import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[asyncData]',
})
export class SubContentDirective implements OnDestroy, OnChanges, OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('asyncData')
  private currentContent$!: Observable<any>;

  @Input('placeholder')
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
    currentContent$: Observable<any>,
    subDestroy: Observable<any>
  ) {
    currentContent$
      .pipe(delay(0), takeUntil(subDestroy))
      .subscribe((content) => {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          $implicit: content,
        });
      });
  }

  ngOnDestroy() {
    this.subDestroy$.next('');
    this.subDestroy$.complete();
  }
}
