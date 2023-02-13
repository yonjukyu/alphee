import { Component, OnInit } from '@angular/core';
import {ProductServices} from "../../../services/productServices";
import {Product} from "../../../models/Product";
import {CollectionTile} from "../../../models/collectionTile";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  collectionTileList!: CollectionTile[];
  ngOnInit(): void {
    this.collectionTileList = [
      {
        imgUrl: "assets/img.jpg",
        title: "spring"
      },
      {
        imgUrl: "assets/img.jpg",
        title: "winter"
      }];

  }
  constructor( ) {}
}
