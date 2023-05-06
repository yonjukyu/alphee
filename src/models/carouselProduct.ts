export class CarouselProduct{
  private _title!: string;
  private _imgUrl!: string;
  private _description!: string;


  constructor(title: string, imgUrl: string, description: string) {
    this._title = title;
    this._imgUrl = imgUrl;
    this._description = description;
  }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get imgUrl(): string {
    return this._imgUrl;
  }

  set imgUrl(value: string) {
    this._imgUrl = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
