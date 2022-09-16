import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Ad } from "src/models/ad.model";

@Injectable({
    providedIn: 'root'
})
export class AdsService {
    constructor(private http: HttpClient){}

    getAds$(): Observable<Ad[]>{
        return this.http.get<Ad[]>(`${environment.apiUrl}/ads`);
    }

    postAd$(ad: Ad): Observable<Ad> {
        ad.likesCount = 0;
        ad.applicants = [];
        ad.isDeleted = false;
        ad.isDeactivated = false;
        ad.creatorId  = 1;
        ad.approved = undefined;

        return this.http.post<Ad>(`${environment.apiUrl}/ads`, ad);
    }
}