import { Component, OnInit } from '@angular/core';
import {CarouselProduct} from "../../../models/carouselProduct";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  carouselProducts: CarouselProduct[] = [
    new CarouselProduct("Nuit torride","../assets/Body Rouge Lisa (3).jpg","COLLECTION 2 DESCRIPTION"),
    new CarouselProduct("Lune de miel","../assets/couple.jpg","COLLECTION 2 DESCRIPTION"),
    new CarouselProduct("Sombre Désir","../assets/arthemis (3).png","COLLECTION 1 DESCRIPTION"),
  ]

  ngOnInit(): void {

  }
  constructor( ) {}
}
