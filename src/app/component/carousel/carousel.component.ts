import {Component, Input, OnInit} from '@angular/core';
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {NgForOf, NgIf} from "@angular/common";
import {CarouselProduct} from "../../../models/carouselProduct";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, RouterLink, NgForOf],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  @Input()
  carrouselProducts: CarouselProduct[] = [];

  ngOnInit(): void {
  }
}
