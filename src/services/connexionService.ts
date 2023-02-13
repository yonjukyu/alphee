import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ConnexionService {
  private _connected: boolean = false;
  private _email!: string;

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get connected(): boolean {
    return this._connected;
  }
  set connected(value: boolean) {
    this._connected = value;
  }
}
