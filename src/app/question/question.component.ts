import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { NumberValueAccessor } from '@angular/forms';
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
  
  
  constructor(public questionService:QuestionService) {
    
   }

  ngOnInit(): void {
    this.questionNumber=0;
    this.subjectNumber=parseInt(sessionStorage.getItem("subjectId"));
    this.levelNumber=parseInt(sessionStorage.getItem("levelId"));
    this.loggedInUserId=parseInt(sessionStorage.getItem("userId"));

  
   
   
    this.questionService.getAllQuestionsSLService(this.subjectNumber,this.levelNumber).subscribe((data:any)=>{
     this.allQuestions=data;
     //this.userResponse=data;
     console.log(this.tempData);
    


     
    
    console.log(this.allQuestions);
    //console.log(this.userResponse);

      
     });
  }
  // getAllQuestionBySL(){
  //   this.questionService.getAllQuestionsSLService(this.myexam,this.mylevel).subscribe((data1:any)=>{
  //     this.allQuestions=data1;
  //     console.log(this.allQuestions);
  //   })
  // }

  prevQues(){

    // this.userResponse[this.questionNumber].userQuestionId=this.allQuestions[this.questionNumber].questionId;
    // this.userResponse[this.questionNumber].userUserId=this.loggedInUserId;
    // this.userResponse[this.questionNumber].userQuestionId=this.allQuestions[this.questionNumber].questionId;

    this.tempData[this.questionNumber].questionId=this.allQuestions[this.questionNumber].questionId;
    this.questionNumber--;

    // console.log(this.userResponse[this.questionNumber].userQuestionId);
    // console.log(this.allQuestions[this.questionNumber].questionId);
    // console.log(this.loggedInUserId);
    // console.log(this.userResponse[this.questionNumber].userUserId);

    // console.log("question number"+this.allQuestions[this.questionNumber]+this.allQuestions[this.questionNumber].answer);
    // console.log("question number"+this.userResponse[this.questionNumber]+this.userResponse[this.questionNumber].userAnswer);
    
    //    this.userResponse[this.questionIndex].questionId=this.questions[this.questionIndex].question_id;
   

    
  }
      //this.userAnswer[this.questionNumber].value=this.allQuestions[this.questionNumber].userResponse[this.questionNumber];

  nextQues(){

    this.tempData[this.questionNumber].questionId=this.allQuestions[this.questionNumber].questionId;
    this.questionNumber++;
    // console.log(this.userResponse[this.questionNumber].userQuestionId);
    // console.log(this.allQuestions[this.questionNumber].questionId);
    // console.log(this.loggedInUserId);
    // console.log(this.userResponse[this.questionNumber].userUserId);
    // console.log("question number"+this.allQuestions[this.questionNumber]+this.allQuestions[this.questionNumber].answer);
    // console.log("question number"+this.userResponse[this.questionNumber]+this.userResponse[this.questionNumber].userAnswer);
   

  }
  submit(){
    this.isSubmitted=true;
    //console.log(this);
    //console.log(this.userResponse);
    for(this.length=0;this.length<=10;this.length++){
      console.log(this.userResponse[this.questionNumber].userAnswer);

    }
    // for(this.questionNumber=1;this.questionNumber<this.length;this.questionNumber++){
    
    //   this.userResponse.forEach(userAnswer => {
        
    //   });

    //   if(this.userResponse[this.questionNumber].userAnswer==this.allQuestions[this.questionNumber].answer){
    //     this.marks+=10;
    //   }
    // console.log("Marks:"+this.marks);

  }

  }; //invocation of th subscribe method


 

