import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import { HeaderComponent } from './component/header/header.component';
import { HomeBoxComponent } from './component/home-box/home-box.component';
import { HomeFullLengthBoxComponent } from './component/home-full-length-box/home-full-length-box.component';
import { CollectionPreviewComponent } from './component/collection-preview/collection-preview.component';
import { ProductComponent } from './component/product/product.component';
import { FooterComponent } from './component/footer/footer.component';
import {ConnexionService} from "../services/connexionService";
import { TestButtonComponent } from './component/test-button/test-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselComponent} from "./component/carousel/carousel.component";
import { NewLoginComponent } from './component/new-login/new-login.component';
import { NewRegisterComponent } from './component/new-register/new-register.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeBoxComponent,
    HomeFullLengthBoxComponent,
    CollectionPreviewComponent,
    ProductComponent,
    FooterComponent,
    TestButtonComponent,
    NewLoginComponent,
    NewRegisterComponent,
    ContactUsComponent,
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
    }),
    NgbModule,
    CarouselComponent
  ],
  providers: [ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
