import {Injectable, OnInit} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Subscription} from "rxjs";
import {User} from "../models/User";

@Injectable({
    providedIn: 'root'
})
export class UserServices implements OnInit{
  productsScratch: any[] = [];
  productsFinals: User[] = [];
  constructor(private store: AngularFirestore) {}


  setupProducts(): Array<any>{
    this.store.collection('user').valueChanges().subscribe(user => user.forEach(i => {
      this.productsScratch.push(i)
    }));
    this.productsScratch.forEach(i => {
      this.productsFinals.push(new User(i.email, i.password, i.subscribed))
      console.log(this.productsFinals)
    })
    return this.productsFinals;
  }

  ngOnInit(): void {
    this.setupProducts();
    console.log(this.productsFinals)
  }

  getAllProducts(): User[]{
    return this.productsFinals;
  }
}
