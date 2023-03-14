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
  ngOnInit(): void {

  }
  constructor( ) {}
}
