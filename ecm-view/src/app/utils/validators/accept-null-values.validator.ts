import { AbstractControl } from "@angular/forms";

export default function acceptNullValues(control: AbstractControl) {
    let value = control.value;
    if(value == '')  control.patchValue(null)
    return null;
}