import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GamesComponent } from './games/games.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { UserQuizzesComponent } from './user-quizzes/user-quizzes.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

import { QuestionPipePipe } from './question-pipe.pipe';
import { QuizQuestionsPipe } from './quiz-questions.pipe';

import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { QuizScoreService } from './quiz-score.service';
import { UserService } from './user.service';

import { TokenInterceptor } from './token.interceptor';
import { GamesService } from './games.service';







// after adding a component, add it to the path ROUTES
const ROUTES = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'games', component: GamesComponent },
  { path: 'quiz', component: QuizComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'landing', component: LandingComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: 'leaderboards', component: LeaderboardsComponent},
  { path: 'user-quizzes', component: UserQuizzesComponent},
  { path: 'update-profile', component: UpdateProfileComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    GamesComponent,
    QuestionsComponent,
    QuizComponent,
    DashboardComponent,
    LandingComponent,
    LeaderboardsComponent,
    UserQuizzesComponent,
    QuestionPipePipe,
    ProfileComponent,
    UpdateProfileComponent,
    QuizQuestionsPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    // MatRadioModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, 
    DataService,
    QuizScoreService,
    UserService,
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }