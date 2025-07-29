import { Routes } from '@angular/router';
import {LandingpageComponent} from "./components/landingpage/landingpage.component";
import {ReviewComponent} from "./components/review/review.component";
import {QuizComponent} from "./components/quiz/quiz.component";

export const routes: Routes = [
  {path: '', component: LandingpageComponent,},
  {path: 'home', component: LandingpageComponent,},
  {path: 'review', component: ReviewComponent},
  {path: 'quiz', component: QuizComponent,},
];
