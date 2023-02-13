import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/Product";
import {ConnexionService} from "../../../services/connexionService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  constructor(private connexionService: ConnexionService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onReserved(): void{
    if(this.connexionService.connected){
      
    }
  }

}
