import { Component, OnInit } from '@angular/core';
import {ConnexionService} from "../../../services/connexionService";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  buttonText!: string

  collectionNames!: any[]
  constructor(private connexionService: ConnexionService,  private route: Router, private store: AngularFirestore) { }

  ngOnInit(): void {
    this.collectionNames = [];
    this.store.collection('product').valueChanges().subscribe(user => user.forEach(i => {
      // @ts-ignore
      let name = i.collection
      if(this.collectionNames.length > 0){
        this.collectionNames.forEach(collectionName => {
          console.log(name + " + " + collectionName)
          if (name != collectionName) {
            this.collectionNames.push(name)
          }
        })
      }else this.collectionNames.push(name)

    }));
    console.log(this.collectionNames)

    if(this.connexionService.connected){
      this.buttonText = "Deconnexion";
    }
    else{ this.buttonText = "Connexion"}
  }

  onConnexion(): void{
    if(this.connexionService.connected){
      this.connexionService.connected = false;
      this.buttonText = "Connexion";
      this.connexionService.email = "";
      this.route.navigateByUrl("");
    }
    else{
      this.route.navigateByUrl("/login")
    }

  }

}