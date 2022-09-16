import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Ad } from "src/models/ad-models/ad.model";

@Injectable({
    providedIn: 'root'
})
export class AdsService {
    constructor(private http: HttpClient){}

    getAds$(): Observable<Ad[]>{
        return this.http.get<Ad[]>(`${environment.apiUrl}/ads`);
    }
}