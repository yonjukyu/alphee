import { Component, OnInit } from '@angular/core';
import {ConnexionService} from "../../../services/connexionService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  buttonText!: string;
  constructor(private connexionService: ConnexionService,  private route: Router) { }

  ngOnInit(): void {
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
