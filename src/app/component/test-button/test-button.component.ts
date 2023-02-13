import { Component, OnInit } from '@angular/core';
import {ConnexionService} from "../../../services/connexionService";

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.scss']
})
export class TestButtonComponent implements OnInit {

  constructor(private connexionService: ConnexionService) { }

  ngOnInit(): void {
  }

  onClick(): void{
    console.log(this.connexionService.connected)
  }
}
