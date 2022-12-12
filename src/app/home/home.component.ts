import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource : any;
  txt!: string;

  constructor(private store: AngularFirestore) {}

  ngOnInit(){
    this.txt = "tougohrezh";
  }

  getAll(){
    this.store.collection('product').valueChanges().subscribe(val => console.log(val));
  }

}
