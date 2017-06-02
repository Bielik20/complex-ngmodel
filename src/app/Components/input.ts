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
  selector: 'form-text',
  template: `
    <div>
      <label *ngIf="label">{{label}}</label>
      <input
        type="text"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [ngClass]="{invalid: ((model.control.dirty || model.control.touched) &&  (invalid | async))}"
        [id]="identifier"
      />
      <validation
        [@flyInOut]="'in,out'"
        *ngIf="(model.control.dirty || model.control.touched) && (invalid | async)"
        [messages]="failures | async">
      </validation>
      <ul>
        <li>Dirty: <span *ngIf="model.control.dirty">YES</span></li>
        <li>Touched: <span *ngIf="model.control.touched">YES</span></li>
        <li>Invalid: <span *ngIf="invalid | async">YES</span></li>
      </ul>
    </div>
  `,
  animations,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FormTextComponent,
    multi: true,
  }],
})
export class FormTextComponent extends ElementBase<string> {
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