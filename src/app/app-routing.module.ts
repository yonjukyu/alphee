import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {CollectionPreviewComponent} from "./component/collection-preview/collection-preview.component";
import {NewLoginComponent} from "./component/new-login/new-login.component";
import {NewRegisterComponent} from "./component/new-register/new-register.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: NewLoginComponent},
  {path:"register", component: NewRegisterComponent},
  {path:"collection/:collectionName" , component: CollectionPreviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
