import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Ad } from '../../models/ad.model';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-user-applications-list',
  templateUrl: './user-applications-list.component.html',
  styleUrls: ['./user-applications-list.component.scss']
})
export class UserApplicationsListComponent implements OnInit {
  ads: Ad[];
    curentUserId: string;
    constructor(private authService: AuthService, private adsService: AdsService) {}
   
    ngOnInit(): void {
      this.curentUserId = this.authService.getLoggedUserFromLocalStorage().id;
      this.adsService.getAds$().subscribe({
        next: (response: Ad[]) => {
          
          this.ads = response.filter(x => x.applicants.includes(this.curentUserId));
        },
        error: (resp: HttpErrorResponse) => {
          console.log(resp)
        }
      })
    }
}
