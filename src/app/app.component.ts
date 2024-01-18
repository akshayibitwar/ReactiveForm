import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomPattern } from './const/validator';
import { CountryData } from './const/CountriesData';
import { NospaceBarvalidator } from './const/validations';
import { EmpIdvalidation } from './const/EmpidValidation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForm';
  SignUpForm ! : FormGroup;
  gendersArray : Array<string> = ['male', 'female', 'others'];
  CountrysArray = CountryData;
country: any;
  constructor(){}
  ngOnInit(): void {
    this.creatSighUpForm();
    this.f['isPermentandCurrentsame']
    .valueChanges
    .subscribe((res)=> {
      console.log(`value of checkbox is chamge to : $(res)`);
      if(res = true){
        console.log(`Current and Permenat Value is same`);

      }else{
        console.log(`Reset Perment Value`);
        }
    })
  }

  creatSighUpForm(){
    this.SignUpForm = new FormGroup({
      username : new FormControl(null, [Validators.required,Validators.minLength(5),Validators.maxLength(10), NospaceBarvalidator.NospaceBar]),
      email : new FormControl(null, [Validators.required, Validators.pattern(CustomPattern.email)]),
      empId: new FormControl(null, [Validators.required, EmpIdvalidation.isEmpIdValid]),
      gender : new FormControl(null, [Validators.required]),
      skills : new FormArray([new FormControl(null, [Validators.required])]),
      password : new FormControl(null, [Validators.required]),
      confirmpassword : new FormControl(null, [Validators.required]),
      PermenantAdresss : new FormGroup({
      countryName : new FormControl(null),
      countryCode : new FormControl(null,),
      currencyCode : new FormControl(null),
      continentName : new FormControl(null),
      capital : new FormControl(null)
      }),
      CurrentAdresss : new FormGroup({
        countryName : new FormControl(null),
        countryCode : new FormControl(null,),
        currencyCode : new FormControl(null),
        continentName : new FormControl(null),
        capital : new FormControl(null)
      }),  
      isPermentandCurrentsame : new FormControl(false)
    })
    
  }
  onSignIn(){
    console.log(this.SignUpForm);
  } 
  get f() {
    return this.SignUpForm.controls
  }
 get getskillControl(){
    return this.SignUpForm.get('skills') as FormArray
  }
  onAddSkill(){
   if(this.getskillControl.length < 5){
    let creatControl = new FormControl(null, [Validators.required])
    this.getskillControl.push(creatControl);
   }
  }
  Removeskill(index : number){
      console.log(index);
    this.getskillControl.removeAt(index);
      
  } 
}
