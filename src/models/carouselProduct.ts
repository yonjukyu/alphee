export class CarouselProduct{
  title!: string;
  imgUrl!: string;
  description!: string;


  constructor(title: string, imgUrl: string, description: string) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
  }
}
