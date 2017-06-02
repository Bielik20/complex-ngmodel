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
import {ComplexModel} from '../Models/complex-model';

@Component({
  selector: 'complex-form',
  template: `
    <div>
        <form-text
            required
            hexadecimal
            name="simpleValue"
            label="First Value"
            placeholder="Enter a hexadecimal value"
            [(ngModel)]="simpleValue"
            [ngModel]="value?.firstValue" (ngModelChange)="handleInput('firstValue', $event)">
        </form-text>

        <form-text
            required
            hexadecimal
            name="simpleValue"
            label="Second Value"
            placeholder="Enter a hexadecimal value"
            [ngModel]="value?.secondValue" (ngModelChange)="handleInput('secondValue', $event)">
        </form-text>

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
    useExisting: FormComplexComponent,
    multi: true,
  }],
})
export class FormComplexComponent extends ElementBase<ComplexModel> {
  @Input() public label: string;
  @Input() public placeholder: string;

  @ViewChild(NgModel) model: NgModel;

  public identifier = `form-complex-${identifier++}`;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    super(validators, asyncValidators);
  }

  handleInput(prop, value) {
    this.value[prop] = value;
    this.value = { ...this.value };
  }
}

let identifier = 0;