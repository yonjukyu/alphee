import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../../models/User";
import {NgToastService} from "ng-angular-popup";
import {Router} from "@angular/router";
import {ConnexionService} from "../../../services/connexionService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail: string = "";
  userPassword: string = "";
  setupOnce: boolean = true;
  usersScratch: any[] = [];
  usersFinals: User[] = [];
  errorTxt!: string;
  doesExist!: boolean;

  constructor(private store: AngularFirestore,
              public router: Router,
              private connexionService: ConnexionService) {
  }

  ngOnInit(): void {
    this.setupUsers();
  }

  setupUsers(): Array<any> {
    this.store.collection('user').valueChanges().subscribe(user => user.forEach(i => {
      this.usersScratch.push(i)
    }));
    this.usersScratch.forEach(i => {
      this.usersFinals.push(new User(i.mail, i.password, i.subscribed))
    })
    return this.usersFinals;
  }

  onSubmitForm(): void {
    if (this.setupOnce) {
      console.log(this.setupUsers());
      this.setupOnce = false;
    }
    this.usersFinals.forEach(user => {
      if (this.userEmail == user.email && this.userPassword == user.password){
        this.connexionService.connected = true;
        this.connexionService.email = user.email;
        this.doesExist = true;
      }
    });
    if(this.doesExist) this.router.navigate([""]);
    else this.errorTxt = "Mot de passe erroné";
  }
}
