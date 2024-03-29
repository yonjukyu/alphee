import {Component, HostListener, OnInit} from '@angular/core';
import {ConnexionService} from "../../services/connexionService";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  buttonText!: string
  nav: any = document.querySelector('nav')
  collectionNames!: any[]
  collection!: any[]
  constructor(private route: Router, private store: AngularFirestore, private connexionService: ConnexionService) {
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  ngOnInit(): void {
    this.collectionNames = [];
    this.collection = []
    this.store.collection('product').valueChanges().subscribe(user => user.forEach(i => {
        // @ts-ignore
      let name = i.collection.toUpperCase();
      if (this.collectionNames.length == 0){
        this.collectionNames.push(i)
        this.collection.push(i)
      }
      else{
        this.collectionNames.forEach(
          nameFromCollection => {
            let isUnique = true;
            this.collection.forEach(
              uniqueCollection => {
                if (nameFromCollection.toUpperCase() == uniqueCollection.toUpperCase()){
                  isUnique = false
                }
              }
            )
          }
        )
      }

    }));
    this.buttonText = this.connexionService.connected ? "Deconnexion" : "Connexion"
  }

  goToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  onConnexion(): void {
    console.log(this.connexionService.connected)
    if (this.connexionService.connected) {
      this.connexionService.connected = false;
      this.buttonText = "Connexion";
      this.connexionService.email = "";
      this.route.navigateByUrl("");
    } else {
      this.route.navigateByUrl("/login")
    }
  }
}
