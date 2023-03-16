import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ConnexionService {
  connected: boolean = false;
  email!: string;
}
