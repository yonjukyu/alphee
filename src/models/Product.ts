export class Product {
  private _collection!: string;
  private _image!: string;
  private _name!: string;
  private _price!: number;
  private _solded!: boolean;


  constructor(collection: string,image: string, name: string, price: number, solded: boolean) {
    this._collection = collection;
    this._image = image;
    this._name = name;
    this._price = price;
    this._solded = solded;
  }


  get collection(): string {
    return this._collection;
  }

  set collection(value: string) {
    this._collection = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get solded(): boolean {
    return this._solded;
  }

  set solded(value: boolean) {
    this._solded = value;
  }
}
