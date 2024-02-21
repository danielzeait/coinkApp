import { Injectable } from "@angular/core";
import { enc, mode, TripleDES } from "crypto-js";
import { environment } from "src/environments/environment";
declare var require: any

@Injectable({
  providedIn: 'root',
})

export class DecryptService {

  constructor() { }

  decryptResponseObject<T = any>(data: string): T {
    const key = this.genKey();
    const wordArray = TripleDES.decrypt(data, key, { mode: mode.ECB });
    return JSON.parse(wordArray.toString(enc.Utf8));
  }

  genKey() {
    var CryptoJS = require("crypto-js");
    let securityKeyArray = CryptoJS.MD5(environment.apiJWT).toString();
    return enc.Hex.parse(securityKeyArray);
  }
}