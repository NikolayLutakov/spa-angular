import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/ads/models/ad.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-org-ads-list',
  templateUrl: './org-ads-list.component.html',
  styleUrls: ['./org-ads-list.component.scss']
})
export class OrgAdsListComponent implements OnInit {
  ads: Ad[];
  curentUserId: string;
  hasOrgPermission: boolean;
  constructor(private authService: AuthService, private adsService: AdsService) {}
  
  ngOnInit(): void {
    this.curentUserId = this.authService.getLoggedUserFromLocalStorage().id;
    this.hasOrgPermission = this.authService.hasPermissions('organisation');
    this.adsService.getAds$().subscribe({
      next: (response: Ad[]) => {
        
        this.ads = response.filter(x => x.creatorId == this.curentUserId);
      },
      error: (resp: HttpErrorResponse) => {
        console.log(resp)
      }
    })
  }

  onDelete(id: number){
    this.adsService.deleteAd$(id).subscribe({
      next: ()=> {
        this.ads = this.ads.filter(x => x.id !== id);
      }
    });
  }
}
