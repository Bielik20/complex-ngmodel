import {ControlValueAccessor} from '@angular/forms';

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {
  private innerValue: T;

  private changed = new Array<(value: T) => void>();
  private touched = new Array<() => void>();

  get value(): T {
    return this.innerValue;
  }

  set value(value: T) {
    console.log('set value')
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => f(value));
    }
  }

  writeValue(value: T) {
    console.log('writeValue')
    this.innerValue = value;
  }

  registerOnChange(fn: (value: T) => void) {
    console.log('registerOnChange')
    this.changed.push(fn);
  }

  registerOnTouched(fn: () => void) {
    console.log('registerOnTouched')
    this.touched.push(fn);
  }

  touch() {
    console.log('touch')
    this.touched.forEach(f => f());
  }
}