import { Component, OnInit } from '@angular/core';
import {UserServices} from "../../services/UserServices";
import {ProductServices} from "../../services/productServices";
import {Product} from "../../models/Product";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail!: String;
  userPassword!: String;

  productsScratch: any[] = [];
  productsFinals: Product[] = [];
  constructor(private store: AngularFirestore) {}

  ngOnInit(): void {
    this.setupProducts();
    console.log(this.productsFinals)
  }
  setupProducts(): Array<any>{
    this.store.collection('product').valueChanges().subscribe(product => product.forEach(i => {
      this.productsScratch.push(i)
    }));
    this.productsScratch.forEach(i => {
      this.productsFinals.push(new Product(i.image, i.name, i.price, i.solded))
      console.log(this.productsFinals)
    })
    return this.productsFinals;
  }

  onSubmitForm(): void {
    console.log("email = " + this.userEmail);
    console.log("password = " + this.userPassword);
    console.log(this.setupProducts());
  }
}
