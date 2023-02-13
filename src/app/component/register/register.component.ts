import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../../models/User";
import {Router} from "@angular/router";
import {ConnexionService} from "../../../services/connexionService";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userEmail: string = "";
  userPassword: string = "";
  setupOnce: boolean = true;
  usersScratch: any[] = [];
  usersFinals: User[] = [];
  errorTxt!: string;
  userPasswordTwo!: string;

  constructor(private store: AngularFirestore,
              public router: Router,
              private connexionService: ConnexionService) {
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
      console.log(this.userEmail + " et aussi " + user.email);
      if (this.userEmail == user.email) exist = true;
    });
    return exist;
  }

  onSubmitForm(): void {
    let regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    if (this.setupOnce) {
      console.log(this.setupUsers());
      this.setupOnce = false;
    }
    if (!this.userExist())
    {
      if (regex.test(this.userEmail) && this.userPassword != "" && this.userPasswordTwo == this.userPassword) {
        this.store.collection('user').add({mail: this.userEmail, password: this.userPassword, subscribed: false});
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
