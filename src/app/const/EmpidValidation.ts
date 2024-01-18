import { AbstractControl, ValidationErrors } from "@angular/forms";



export class EmpIdvalidation{
   static isEmpIdValid(control : AbstractControl): null | ValidationErrors{
        let val = control.value as string;
    if(val){
         let  regexp = /^[a-z]\d{3}$/i;

         let isValid = regexp.test(val)
         return isValid ? null : {inValidEmpId : `Emp Id should be start with 1 alphabet and end with 3 number`}
           }else{
                    return null
                }
             }
        }