import { Component, OnInit } from '@angular/core';
import {ProductServices} from "../../services/productServices";
import {Product} from "../../models/Product";

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
