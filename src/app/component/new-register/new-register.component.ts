import { Component } from '@angular/core';
import {User} from "../../../models/User";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import {ConnexionService} from "../../services/connexionService";
import {EncodingServiceService} from "../../services/encoding-service.service";

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss']
})
export class NewRegisterComponent {
  userEmail: string = "";
  userPassword: string = "";
  setupOnce: boolean = true;
  usersScratch: any[] = [];
  usersFinals: User[] = [];
  errorTxt!: string;
  userPasswordTwo!: string;

  constructor(private store: AngularFirestore,
              public router: Router,
              private connexionService: ConnexionService,
              private encodingService: EncodingServiceService) {
  }

  ngOnInit(): void {
    this.setupUsers();
  }

  setupUsers(): Array<any> {
    this.usersFinals = [];
    this.store.collection('user').valueChanges().subscribe(user => user.forEach(i => {
      this.usersScratch.push(i)
    }));
    this.usersScratch.forEach(i => {
      this.usersFinals.push(new User(i.mail, i.password, i.subscribed))
    })
    return this.usersFinals;
  }

  userExist(): boolean {
    let exist: boolean = false;
    this.usersFinals.forEach(user => {
      if (this.userEmail == user.email) exist = true;
    });
    return exist;
  }

  onSubmitForm(): void {
    console.log(this.encodingService.set(this.userPassword))
    console.log(this.encodingService.get(this.encodingService.set(this.userPassword)))
    let regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    if (this.setupOnce) {
      console.log(this.setupUsers());
      this.setupOnce = false;
    }
    if (!this.userExist())
    {
      if (regex.test(this.userEmail) && this.userPassword != "" && this.userPasswordTwo == this.userPassword) {
        this.store.collection('user').add({mail: this.userEmail, password: this.encodingService.set(this.userPassword), subscribed: false});
        this.errorTxt = "accout created you will be redirected in 2 seconds";
        this.connexionService.connected = true;
        this.connexionService.email = this.userEmail;
        setTimeout(() => this.router.navigate([""]), 2000);
      } else if (!regex.test(this.userEmail)) this.errorTxt = "Invalid Mail Format !"
      else if (this.userPassword == "") this.errorTxt = "Please insert a password";
      else if (this.userPasswordTwo != this.userPassword) this.errorTxt = "Passwords dont match";
    }
    else this.errorTxt = "account already exist";
  }
}
