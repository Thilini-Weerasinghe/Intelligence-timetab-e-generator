import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { SubjectformComponent } from './components/subjectform/subjectform.component';
import { LecturerformComponent } from './components/lecturerform/lecturerform.component';
import { LecturehallformComponent } from './components/lecturehallform/lecturehallform.component';
import { SelectionComponent } from './components/selection/selection.component';

import { LecturerService} from './shared_service/lecturer.service';
import { LoginService} from './shared_service/login.service'; 
import {HttpClientModule , HttpHeaders} from '../../node_modules/@angular/common/http';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes=[
{path: 'login', component : LoginComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ViewComponent,
    SubjectformComponent,
    LecturerformComponent,
    LecturehallformComponent,
    SelectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    



    RouterModule.forRoot([
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'view',
        component : ViewComponent
      },
      {
        path : 'login/select',
        component : SelectionComponent
      },

      {
        path : 'login/select/subject',
        component : SubjectformComponent
      },
      {
        path : 'login/select/lecturer',
        component : LecturerformComponent
      },
      {
        path : 'login/select/lecture hall',
        component : LecturehallformComponent
      },
      {
        path : '',
        component : HomeComponent
      }
    ]),

  ],
    providers: [
      LecturerService ,
      LoginService
    
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
