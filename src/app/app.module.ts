import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import { ConnexionComponent } from './connexion/connexion.component';
import { HeaderComponent } from './header/header.component';
import { HomeBoxComponent } from './home-box/home-box.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeFullLengthBoxComponent } from './home-full-length-box/home-full-length-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    HeaderComponent,
    HomeBoxComponent,
    LoginComponent,
    RegisterComponent,
    HomeFullLengthBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyB-KDEMdkXb-j1DWmvaTCIahNQYnAYnG08",
        authDomain: "alphee-d506a.firebaseapp.com",
        projectId: "alphee-d506a",
        storageBucket: "alphee-d506a.appspot.com",
        messagingSenderId: "149647559283",
        appId: "1:149647559283:web:cc14016ed5cab0bc66f806",
        measurementId: "G-6MR36DPQ86"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
