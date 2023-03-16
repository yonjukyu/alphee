import { Component } from '@angular/core';
import {User} from "../../../models/User";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import {ConnexionService} from "../../services/connexionService";
import {EncodingServiceService} from "../../services/encoding-service.service";

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.scss'],
})
export class NewLoginComponent {
  userEmail: string = "";
  userPassword: string = "";
  usersScratch: any[] = [];
  usersFinals: User[] = [];
  errorTxt: string = "";
  doesExist!: boolean;

  constructor(private store: AngularFirestore,
              public router: Router,
              private connexionService: ConnexionService,
              private encodingService: EncodingServiceService) {
  }

  ngOnInit(): void {
    this.setupUsers();
  }

  setupUsers() {
    this.usersFinals.length = 0;
    this.store.collection('user').valueChanges().subscribe(user => user.forEach(i => {
      this.usersScratch.push(i)
    }));
    this.usersScratch.forEach(i => {
      this.usersFinals.push(new User(i.mail, i.password, i.subscribed))
    })
    this.usersScratch.length = 0;
  }

  onSubmitForm(): void {
    this.setupUsers()
    this.usersFinals.forEach(user => {
      if (this.userEmail == user.email && this.userPassword == this.encodingService.get(user.password)){
        this.connexionService.connected = true;
        this.connexionService.email = user.email;
        this.doesExist = true;
      }
    });
    if(this.doesExist) this.router.navigate([""]);
    else this.errorTxt = "Mot de passe erroné";
  }
}
