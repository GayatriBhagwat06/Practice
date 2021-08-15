import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { QuestionComponent } from './question/question.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { UserloginComponent } from './userlogin/userlogin.component';



const routes: Routes = [
  {
    path:'',redirectTo:'homeLink',pathMatch:'full'
  },
  {
    path:'homeLink',component:HomeComponent,
    
  },
  
  {
    path:'aboutus',component:AboutusComponent,
  },
  {
    path:'userlogin',component:UserloginComponent
  },
  {
    path:'instructions',component:InstructionsComponent
  },
  {
    path:'subjectList',component:SubjectListComponent
  },
  {
    path:'showQuestion',component:QuestionComponent
  }
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
