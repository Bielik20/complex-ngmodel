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
} from '@angular/forms';

import {ValueAccessorBase} from '../Base/value-accessor';

@Component({
  selector: 'form-text',
  template: `
    <div>
      <label *ngIf="label" [attr.for]="identifier">{{label}}</label>
      <input
        type="text"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [ngClass]="{invalid: (invalid | async)}"
        [id]="identifier"
      />
    </div>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FormTextComponent,
    multi: true,
  }],
})
export class FormTextComponent extends ValueAccessorBase<string> {
  @Input() public label: string;
  @Input() public placeholder: string;

  @ViewChild(NgModel) model: NgModel;

  public identifier = `form-text-${identifier++}`;

  constructor() {
    super();
  }
}

let identifier = 0;