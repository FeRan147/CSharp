import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[gvStringTemplateOutlet]',
  exportAs: 'gvStringTemplateOutlet'
})
export class GvStringTemplateOutletDirective implements OnChanges {
  private isTemplate: boolean;
  // tslint:disable-next-line:no-any
  private inputTemplate: TemplateRef<any> | null = null;
  private inputViewRef: EmbeddedViewRef<void> | null = null;
  private defaultViewRef: EmbeddedViewRef<void> | null = null;

  // tslint:disable-next-line:no-any
  @Input() gvStringTemplateOutletContext: any | null = null;

  @Input()
  // tslint:disable-next-line:no-any
  set gvStringTemplateOutlet(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this.isTemplate = true;
      this.inputTemplate = value;
    } else {
      this.isTemplate = false;
    }
  }

  recreateView(): void {
    if (!this.isTemplate) {
      /** use default template when input is string **/
      if (!this.defaultViewRef) {
        if (this.defaultTemplate) {
          this.defaultViewRef = this.viewContainer.createEmbeddedView(
            this.defaultTemplate,
            this.gvStringTemplateOutletContext
          );
        }
      }
    } else {
      /** use input template when input is templateRef **/
      if (!this.inputViewRef) {
        if (this.inputTemplate) {
          this.inputViewRef = this.viewContainer.createEmbeddedView(
            this.inputTemplate,
            this.gvStringTemplateOutletContext
          );
        }
      }
    }
  }

  // tslint:disable-next-line:no-any
  private getType(value: string | TemplateRef<any>): 'template' | 'string' {
    if (value instanceof TemplateRef) {
      return 'template';
    } else {
      return 'string';
    }
  }

  private shouldRecreateView(changes: SimpleChanges): boolean {
    const { gvStringTemplateOutletContext, gvStringTemplateOutlet } = changes;
    let shouldOutletRecreate = false;
    if (gvStringTemplateOutlet) {
      if (gvStringTemplateOutlet.firstChange) {
        shouldOutletRecreate = true;
      } else {
        const previousOutletType = this.getType(gvStringTemplateOutlet.previousValue);
        const currentOutletType = this.getType(gvStringTemplateOutlet.currentValue);
        shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
      }
    }
    const shouldContextRecreate =
      gvStringTemplateOutletContext && this.hasContextShapeChanged(gvStringTemplateOutletContext);
    return shouldContextRecreate || shouldOutletRecreate;
  }

  private hasContextShapeChanged(ctxChange: SimpleChange): boolean {
    const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
    const currCtxKeys = Object.keys(ctxChange.currentValue || {});

    if (prevCtxKeys.length === currCtxKeys.length) {
      for (const propName of currCtxKeys) {
        if (prevCtxKeys.indexOf(propName) === -1) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }

  // tslint:disable-next-line:no-any
  private updateExistingContext(ctx: any): void {
    for (const propName of Object.keys(ctx)) {
      // tslint:disable-next-line:no-any
      (this.inputViewRef!.context as any)[propName] = this.gvStringTemplateOutletContext[propName];
    }
  }

  constructor(private viewContainer: ViewContainerRef, private defaultTemplate: TemplateRef<void>) {}

  ngOnChanges(changes: SimpleChanges): void {
    const recreateView = this.shouldRecreateView(changes);
    if (recreateView) {
      if (this.viewContainer) {
        this.viewContainer.clear();
        this.defaultViewRef = null;
        this.inputViewRef = null;
      }
      this.recreateView();
    } else {
      if (this.inputViewRef && this.gvStringTemplateOutletContext) {
        this.updateExistingContext(this.gvStringTemplateOutletContext);
      }
    }
  }
}