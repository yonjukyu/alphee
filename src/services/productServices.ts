import {Injectable, OnInit} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Subscription} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductServices{
  products!: Array<any>;
  constructor(private store: AngularFirestore) {}




  getAllproduct(): Subscription{

   return  this.store.collection('product').valueChanges().subscribe();
  }
}
