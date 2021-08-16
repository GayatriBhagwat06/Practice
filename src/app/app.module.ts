import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { QuestionComponent } from './question/question.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { UserReportComponent } from './user-report/user-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    QuestionComponent,
    UserloginComponent,
    InstructionsComponent,
    AboutusComponent,
    HomeComponent,
    SubjectListComponent,
    ShowResultComponent,
    UserReportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    NgbModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
