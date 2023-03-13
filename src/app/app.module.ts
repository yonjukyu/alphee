import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import { HeaderComponent } from './component/header/header.component';
import { HomeBoxComponent } from './component/home-box/home-box.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeFullLengthBoxComponent } from './component/home-full-length-box/home-full-length-box.component';
import { CollectionPreviewComponent } from './component/collection-preview/collection-preview.component';
import { ProductComponent } from './component/product/product.component';
import { FooterComponent } from './component/footer/footer.component';
import {ConnexionService} from "../services/connexionService";
import { TestButtonComponent } from './component/test-button/test-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeBoxComponent,
    LoginComponent,
    RegisterComponent,
    HomeFullLengthBoxComponent,
    CollectionPreviewComponent,
    ProductComponent,
    FooterComponent,
    TestButtonComponent,
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
  providers: [ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
