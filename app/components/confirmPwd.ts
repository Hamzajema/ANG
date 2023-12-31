import { FormGroup } from '@angular/forms';
// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string)
{
 return (formGroup: FormGroup) => {
 const control = formGroup.controls[controlName]; //pwd
 const matchingControl = formGroup.controls[matchingControlName]; //cpwd
 // set error on matchingControl if validation fails
 if (control.value !== matchingControl.value) {
 matchingControl.setErrors({ mustMatch: true });
 } else {
 matchingControl.setErrors(null);
 }
 }
}


