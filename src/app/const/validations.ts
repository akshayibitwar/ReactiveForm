import { AbstractControl, ValidationErrors } from "@angular/forms";


export class NospaceBarvalidator{
 static   NospaceBar(control : AbstractControl): null | ValidationErrors{
        let val = control.value as string;

        if(!val){
            return null
        }
        if(val.includes(' ')){
            return{NospaceBar : `Space is not Allowed`}
        }else {
            return null
        }
    }
}