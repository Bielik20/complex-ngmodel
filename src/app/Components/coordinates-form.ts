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
        type="number"
        [(ngModel)]="value.longitude"
      />

      <label>latitude</label>
      <input
        type="number"
        [(ngModel)]="value.latitude"
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
}
