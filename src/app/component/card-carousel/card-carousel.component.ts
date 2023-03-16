import {Component, Input} from '@angular/core';
import {Product} from "../../../models/Product";

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent {
  @Input() product!: Product;
}
