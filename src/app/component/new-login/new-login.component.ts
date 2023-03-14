import { Component } from '@angular/core';
import {User} from "../../../models/User";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import {ConnexionService} from "../../../services/connexionService";

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.scss']
})
export class NewLoginComponent {
  userEmail: string = "";
  userPassword: string = "";
  setupOnce: boolean = true;
  usersScratch: any[] = [];
  usersFinals: User[] = [];
  errorTxt: string = "";
  doesExist!: boolean;

  constructor(private store: AngularFirestore,
              public router: Router,
              private connexionService: ConnexionService) {
  }

  ngOnInit(): void {
    this.setupUsers();
  }

  setupUsers() {
    console.log("afge")
    this.usersFinals.length = 0;
    this.store.collection('user').valueChanges().subscribe(user => user.forEach(i => {
      this.usersScratch.push(i)
    }));
    this.usersScratch.forEach(i => {
      this.usersFinals.push(new User(i.mail, i.password, i.subscribed))
    })
    console.log(this.usersFinals)
    this.usersScratch.length = 0;
  }

  onSubmitForm(): void {
    this.setupUsers()
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
