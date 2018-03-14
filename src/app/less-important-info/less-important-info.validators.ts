import { AbstractControl } from "@angular/forms";

export function GreaterThanNineThousandValidator(formControl: AbstractControl) {
  return formControl.value && formControl.value > 9000
    ? { greaterThanNineThousandError: true }
    : null;
}
