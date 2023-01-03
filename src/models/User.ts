export class User {

  private _email!: string;
  private _password!: string;
  private _subscribed!: boolean;

  constructor(email: string, password: string, subscribed: boolean) {
    this._email = email;
    this._password = password;
    this._subscribed = subscribed;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get subscribed(): boolean {
    return this._subscribed;
  }

  set subscribed(value: boolean) {
    this._subscribed = value;
  }
}
