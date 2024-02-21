import { HttpClient } from "@angular/common/http";
import { Injectable, effect, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { DecryptService } from "src/app/shared/services/decrypt.service";
import { Documents, Genders, Key } from "src/app/shared/services/interfaces";
import { environment } from "src/environments/environment";



@Injectable({
    providedIn: 'root',
})

export class RegisterService {

    private decryptService: DecryptService = inject(DecryptService);
    private http: HttpClient = inject(HttpClient);

    keyBoard: Array<Key> = [
        { keyType: 'num', value: 1 },
        { keyType: 'num', value: 2 },
        { keyType: 'num', value: 3 },
        { keyType: 'num', value: 4 },
        { keyType: 'num', value: 5 },
        { keyType: 'num', value: 6 },
        { keyType: 'num', value: 7 },
        { keyType: 'num', value: 8 },
        { keyType: 'num', value: 9 },
        { keyType: 'del', value: -1 },
        { keyType: 'num', value: 0 },
        { keyType: 'check', value: -1 },
    ];

    constructor() { }

    getKeyBoard(): Array<Key> {
        return this.keyBoard;
    }

    getGenders(): Observable<Genders[]> {
        const payload = this.http.get<any>(`${environment.apiUrl}/signup/genders?apiKey=${environment.apiKey}`);
        let genders: any[] = [];

        return payload.pipe(
            map((response: any) => {
                if (response && response.payload) {
                    genders = this.decryptService.decryptResponseObject(response.payload)
                }
                return genders
            })
        )
    }

    getDocumentTypes(): Observable<Documents[]> {
        let url = `${environment.apiUrl}/signup/documentTypes?apiKey=${environment.apiKey}`;
        return this.http.get<Documents[]>(url)
    }

}