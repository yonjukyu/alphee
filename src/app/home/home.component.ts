import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {ProductServices} from "../../services/productServices";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource : any;
  txt!: string;

  constructor( private productService: ProductServices ) {}

  ngOnInit(){
    this.txt = "tougohrezh";
  }

  getAllProduct(){
    console.log(this.productService.getAllproduct());
  }

}
