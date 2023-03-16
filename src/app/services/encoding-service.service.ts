import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncodingServiceService {

  constructor() { }

  set(value: string){
    var key = CryptoJS.enc.Utf8.parse("3/P[a?,\\aRYlA2d:pM%U");
    var iv = CryptoJS.enc.Utf8.parse("3/P[a?,\\aRYlA2d:pM%U");
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    return encrypted.toString();
  }

  //The get method is use for decrypt the value.
  get(value: string){
    var key = CryptoJS.enc.Utf8.parse("3/P[a?,\\aRYlA2d:pM%U");
    var iv = CryptoJS.enc.Utf8.parse("3/P[a?,\\aRYlA2d:pM%U");
    var decrypted = CryptoJS.AES.decrypt(value, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
