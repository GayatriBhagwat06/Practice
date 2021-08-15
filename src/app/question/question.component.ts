import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Questions1 } from '../Questions1';
import { UserResponse } from "../UserResponse";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  allQuestions: Questions1[] = []; 

  subjectNumber:number;
  levelNumber:number;
  questionNumber:number;
  tempAnswer:Questions1[]=[];
  isSubmitted:boolean=false;
  marks:number=0;
  length:number;
  j:number=0;
  
  tempData:Questions1[]=[];
  userResponse : UserResponse[]=[new UserResponse()];
  loggedInUserId:number;

  
  
  
  constructor(public questionService:QuestionService,public router:Router) {
    
   }

  ngOnInit(): void {
    this.questionNumber=0;
    this.subjectNumber=parseInt(sessionStorage.getItem("subjectId"));
    this.levelNumber=parseInt(sessionStorage.getItem("levelId"));
    this.loggedInUserId=parseInt(sessionStorage.getItem("userId"));

    

  
   
   
    this.questionService.getAllQuestionsSLService(this.subjectNumber,this.levelNumber).subscribe((data:any)=>{
     this.allQuestions=data;
     this.userResponse=data;
    console.log(this.allQuestions);
    console.log(this.userResponse);

      
     });
  }
 

  prevQues(){
    if(this.userResponse[this.questionNumber].userAnswer!=undefined){
      this.userResponse[this.questionNumber].userQuestionId=this.allQuestions[this.questionNumber].questionId;
    console.log("question number"+this.allQuestions[this.questionNumber].questionId+" "+this.allQuestions[this.questionNumber].answer);
    console.log("question number"+this.userResponse[this.questionNumber].userQuestionId+" "+this.userResponse[this.questionNumber].userAnswer);
    this.questionNumber--;
    }
    else{
      this.userResponse[this.questionNumber].userQuestionId=this.allQuestions[this.questionNumber].questionId;
      this.userResponse[this.questionNumber].userAnswer="default";
      console.log("question number"+this.allQuestions[this.questionNumber].questionId+" "+this.allQuestions[this.questionNumber].answer);
      console.log("question number"+this.userResponse[this.questionNumber].userQuestionId+" "+this.userResponse[this.questionNumber].userAnswer);
      this.questionNumber--;
    }

   
   

    
  }
      //this.userAnswer[this.questionNumber].value=this.allQuestions[this.questionNumber].userResponse[this.questionNumber];

  nextQues(){
    
    if(this.userResponse[this.questionNumber].userAnswer!=undefined){
      this.userResponse[this.questionNumber].userQuestionId=this.allQuestions[this.questionNumber].questionId;
    console.log("question number "+this.allQuestions[this.questionNumber].questionId+" "+this.allQuestions[this.questionNumber].answer);
    console.log("question number "+this.userResponse[this.questionNumber].userQuestionId+" "+this.userResponse[this.questionNumber].userAnswer);
    this.questionNumber++;
    }
    else{
      this.userResponse[this.questionNumber].userQuestionId=this.allQuestions[this.questionNumber].questionId;
      this.userResponse[this.questionNumber].userAnswer="default";
      console.log("question number "+this.allQuestions[this.questionNumber].questionId+" "+this.allQuestions[this.questionNumber].answer);
      console.log("question number "+this.userResponse[this.questionNumber].userQuestionId+" "+this.userResponse[this.questionNumber].userAnswer);
      this.questionNumber++;
    }
    
   
   
  }
  submit(){
    this.isSubmitted=true;
    console.log(this.userResponse[0].userAnswer);
    console.log(this.userResponse[1].userAnswer);
    console.log(this.userResponse[2].userAnswer);
    console.log(this.userResponse[3].userAnswer);
    console.log("initial marks"+this.marks);


    for(this.j=0;this.j<10;this.j++){
      if(this.userResponse[this.j].userAnswer==this.allQuestions[this.j].answer){
       this.marks=this.marks+10; 
      }
    }
    console.log(this.marks);
    sessionStorage.setItem("userMarks",String(this.marks));
    this.router.navigate(['showResult']);
  }

 
  }; //invocation of th subscribe method


 

 // console.log(this.userResponse[this.questionNumber].userQuestionId);
    // console.log(this.allQuestions[this.questionNumber].questionId);
    // console.log(this.loggedInUserId);
    // console.log(this.userResponse[this.questionNumber].userUserId);

    // console.log("question number"+this.allQuestions[this.questionNumber]+this.allQuestions[this.questionNumber].answer);
    // console.log("question number"+this.userResponse[this.questionNumber]+this.userResponse[this.questionNumber].userAnswer);
    
     // for(this.questionNumber=1;this.questionNumber<this.length;this.questionNumber++){
    
    //   this.userResponse.forEach(userAnswer => {
        
    //   });

     // console.log(this.userResponse[this.questionNumber].userQuestionId);
    // console.log(this.allQuestions[this.questionNumber].questionId);
    // console.log(this.loggedInUserId);
    // console.log(this.userResponse[this.questionNumber].userUserId);
    // console.log("question number"+this.allQuestions[this.questionNumber]+this.allQuestions[this.questionNumber].answer);
    // console.log("question number"+this.userResponse[this.questionNumber]+this.userResponse[this.questionNumber].userAnswer);
   
