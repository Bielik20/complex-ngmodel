import {ControlValueAccessor} from '@angular/forms';

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {

  private innerValue: T;
  onChange = (value: T) => {};
  onTouched = () => {};

  get value(): T {
    return this.innerValue;
  }

  set value(value: T) {
    console.log('set value')
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.onChange(this.value);
    }
  }

  writeValue(value: T) {
    console.log('writeValue')
    this.innerValue = value;
  }

  registerOnChange(fn: (value: T) => void) {
    console.log('registerOnChange')
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    console.log('registerOnTouched')
    this.onTouched = fn;
  }

  // touch() {
  //   console.log('touch')
  //   this.onTouched();
  // }
}
