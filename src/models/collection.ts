import {Product} from "./Product";

export class Collection{
  private _name!: string;
  private _product!: Product[];


  constructor(name: string, product: Product[]) {
    this._name = name;
    this._product = product;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get product(): Product[] {
    return this._product;
  }

  set product(value: Product[]) {
    this._product = value;
  }
}
