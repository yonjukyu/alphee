import {Component, Input} from '@angular/core';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";
import {CarouselProduct} from "../../../models/carouselProduct";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input()
  carrouselProducts!: CarouselProduct[];
}
