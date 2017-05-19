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

import { ValueAccessorBase } from '../Base/value-accessor';
import { MyCoordinates } from "app/Models/Coordinates";

@Component({
  selector: 'coordinates-form',
  template: `
    <div>
      <label>longitude</label>
      <input
        required
        type="number"
        [ngModel]="value?.longitude" (ngModelChange)="handleInput('longitude', $event)"
      />

      <label>latitude</label>
      <input
        type="number"
        [ngModel]="value?.latitude" (ngModelChange)="handleInput('latitude', $event)"
      />
    </div>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CoordinatesFormComponent,
    multi: true,
  }],
})
export class CoordinatesFormComponent extends ValueAccessorBase<MyCoordinates> {

  @ViewChild(NgModel) model: NgModel;

  constructor() {
    super();
  }

  handleInput(prop, value) {
    this.value[prop] = value;
    this.value = { ...this.value };
  }
}
