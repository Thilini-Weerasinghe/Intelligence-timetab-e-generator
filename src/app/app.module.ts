import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { SubjectformComponent } from './components/subjectform/subjectform.component';


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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
