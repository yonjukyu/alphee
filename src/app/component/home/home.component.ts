import { Component, OnInit } from '@angular/core';
import {CarouselProduct} from "../../../models/carouselProduct";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  carouselProducts: CarouselProduct[] = [
    new CarouselProduct("spring","https://picsum.photos/id/944/900/500","COLLECTION 1 DESCRIPTION"),
    new CarouselProduct("COLLECTION 2","https://picsum.photos/id/1011/900/500","COLLECTION 2 DESCRIPTION"),
    new CarouselProduct("COLLECTION 3","https://picsum.photos/id/984/900/500","COLLECTION 3 DESCRIPTION"),
  ]

  ngOnInit(): void {

  }
  constructor( ) {}
}
