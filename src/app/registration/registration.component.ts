import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserRegistrationService } from '../ServiceRegistration/user-registration.service';
//import { errorMonitor } from 'events';
import { Register } from './registration';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  Registration:Register=new Register();

  
  constructor(private formBuilder: FormBuilder,private UserRegistrationservice:UserRegistrationService) {
   
   
   }

   


  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      //title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      
      // validates date format yyyy-mm-dd
      dateOfBirth: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      qualification:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      yearOfCompletion:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
      country:[''],
      state:[''],
      city:[''],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]],
      confirmPassword: ['', Validators.required],
      
      //acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: this.MustMatch('password', 'confirmPassword')
  });
}

/*newUser():void{
  this.submitted=false;
  this.Myuser=new Myuser();
}*/

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;
  //console.log(this.registerForm.get("firstName"));
  this.Registration.firstName=this.registerForm.get('firstName')?.value;
  this.Registration.lastName=this.registerForm.get('lastName')?.value;
  this.Registration.mobileNo=this.registerForm.get('mobileNo')?.value;
  this.Registration.dateOfBirth=this.registerForm.get('dateOfBirth')?.value;
  this.Registration.email=this.registerForm.get('email')?.value;
  this.Registration.qualification=this.registerForm.get('qualification')?.value;
  this.Registration.yearOfCompletion=this.registerForm.get('yearOfCompletion')?.value;
  this.Registration.country=this.registerForm.get('country')?.value;
  this.Registration.state=this.registerForm.get('state')?.value;
  this.Registration.city=this.registerForm.get('city')?.value;
  this.Registration.password=this.registerForm.get('password')?.value;
  this.save();

  
  

  

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
MustMatch(controlName: string, matchingControlName: string) {
return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
    } else {
        matchingControl.setErrors(null);
    }
}
}
public save(){
  this.UserRegistrationservice.doRegistration(this.Registration).subscribe(data => console.log(data), error => console.log(error)
  
    );
    this.Registration=new Register();
}

  }


