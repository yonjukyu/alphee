import {Injectable, OnInit} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Subscription} from "rxjs";
import {Product} from "../../models/Product";

@Injectable({
    providedIn: 'root'
})
export class ProductServices implements OnInit{
  productsScratch: any[] = [];
  productsFinals: Product[] = [];
  constructor(private store: AngularFirestore) {}


  setupProducts(): Array<any>{
    this.store.collection('product').valueChanges().subscribe(product => product.forEach(i => {
      this.productsScratch.push(i)
    }));
    this.productsScratch.forEach(i => {
      this.productsFinals.push(new Product(i.collection ,i.image, i.name, i.price, i.solded,i.description))
      console.log(this.productsFinals)
    })
    return this.productsFinals;
  }

  ngOnInit(): void {
    this.setupProducts();
    console.log(this.productsFinals)
  }
}
