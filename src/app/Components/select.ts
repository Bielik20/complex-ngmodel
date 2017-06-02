import {
  Component,
  Optional,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';

import {
  NgModel,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';

import {ElementBase} from '../Base/element-base';
import {animations} from '../Base/animations';

@Component({
  selector: 'form-select',
  template: `
    <div>
      <label *ngIf="label">{{label}}</label>
      <select
          [(ngModel)]="value"
          [ngClass]="{invalid: ((model.control.dirty || model.control.touched) &&  (invalid | async))}"
          [id]="identifier">
        <option value="" disabled selected *ngIf="placeholder">{{placeholder}}</option>
        <ng-content></ng-content>
      </select>
      <validation
        [@flyInOut]="'in,out'"
        *ngIf="(model.control.dirty || model.control.touched) && (invalid | async)"
        [messages]="failures | async">
      </validation>
    </div>
  `,
  animations,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FormSelectComponent,
    multi: true,
  }],
})
export class FormSelectComponent extends ElementBase<string> {
  @Input() public label: string;
  @Input() public placeholder: string;

  @ViewChild(NgModel) model: NgModel;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }
}