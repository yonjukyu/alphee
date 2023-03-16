import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/Product";
import {CarouselProduct} from "../../../models/carouselProduct";

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit{
  @Input()
  product!: Product;

  carrouselProducts: CarouselProduct[] = [];
  ngOnInit(): void {
    this.product.image.forEach(
      imageUrl => {
        this.carrouselProducts.push(
          new CarouselProduct("fea", "assets/"+imageUrl, ""),
        )
      }
    )
  }
}
