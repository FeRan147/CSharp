import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy, forwardRef, Input, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'gv-switch',
  templateUrl: './gv-switch.component.html',
  styleUrls: ['./gv-switch.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GvSwitchComponent),
      multi: true
    }
  ],
  host: {
    '(click)': 'hostClick($event)'
  },
})
export class GvSwitchComponent implements ControlValueAccessor, AfterViewInit {
  checked = false;
  onChange: (value: boolean) => void = () => null;
  onTouched: () => void = () => null;
  @ViewChild('switchElement', { static: true }) private switchElement: ElementRef;
  @Input() gvIcon: string | TemplateRef<void>;
  @Input() name: string;


  hostClick(e: MouseEvent): void {
    e.preventDefault();
    this.updateValue(!this.checked);
  }

  updateValue(value: boolean): void {
    if (this.checked !== value) {
      this.checked = value;
      this.onChange(this.checked);
    }
  }



  focus(): void {
    this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
  }

  blur(): void {
    this.switchElement.nativeElement.blur();
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private focusMonitor: FocusMonitor
  ) {}

  ngAfterViewInit(): void {
    this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        // When a focused element becomes disabled, the browser *immediately* fires a blur event.
        // Angular does not expect events to be raised during change detection, so any state change
        // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
        // See https://github.com/angular/angular/issues/17793. To work around this, we defer
        // telling the form control it has been touched until the next tick.
        Promise.resolve().then(() => this.onTouched());
      }
    });
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
  }

  writeValue(value: boolean): void {
    this.checked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (_: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  
}
