import {Component, Input, OnInit} from '@angular/core';
import {CollectionTile} from "../models/collectionTile";

@Component({
  selector: 'app-home-full-length-box',
  templateUrl: './home-full-length-box.component.html',
  styleUrls: ['./home-full-length-box.component.scss']
})
export class HomeFullLengthBoxComponent implements OnInit {
  @Input() collectionTile!: CollectionTile;
  constructor() {
  }

  ngOnInit(): void {
  }

}
