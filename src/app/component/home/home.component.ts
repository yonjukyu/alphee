import { Component, OnInit } from '@angular/core';
import {CarouselProduct} from "../../../models/carouselProduct";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  carouselProducts: CarouselProduct[] = [
    new CarouselProduct("Sombre Désir","../assets/homeCarrousel1.png","COLLECTION 1 DESCRIPTION"),
    new CarouselProduct("Nuit torride","../assets/homeCarrousel2.png","COLLECTION 2 DESCRIPTION"),
  ]

  ngOnInit(): void {

  }
  constructor( ) {}
}
