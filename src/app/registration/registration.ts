import { DatePipe } from "@angular/common";

export class Register{
    
    city!: string;
    country!: string;
    dateOfBirth!: Date;
    email!: string;
    firstName!: string;
    lastName!: string;
    mobileNo!: string;
    password!: string;
    qualification!: string;
    state!: string;
    yearOfCompletion!: number;
    
    /*constructor(city:string="",country:string="",dateOfBirth:Date=new Date(""), email:string="",firstName:string="Ishan", lastName:string="B",
     mobileNo:string="",password:string="", qualification:string="",state:string="",yearOfCompletion:number=9)
    {
        this.city=city;
        this.country=country;
        this.dateOfBirth=dateOfBirth;
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
        this.mobileNo=mobileNo;
        this.password=password;
        this.qualification=qualification;
        this.state=state;
        this.yearOfCompletion=yearOfCompletion;
        
    }*/
   
}
