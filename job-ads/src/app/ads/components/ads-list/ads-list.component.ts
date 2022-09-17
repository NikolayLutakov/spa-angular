import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from 'src/app/ads/models/ad.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit {
  ads: Ad[];
  hasOrgPermission: boolean;
  hasUserPermission: boolean;
  constructor(private authService: AuthService, private adsService: AdsService, private router: Router) {}
  
  ngOnInit(): void {
    this.hasOrgPermission = this.authService.hasPermissions('organisation');
    this.hasUserPermission = this.authService.hasPermissions('user');

    this.adsService.getAds$().subscribe({
      next: (response: Ad[]) => {
        
        this.ads = response;
      },
      error: (resp: HttpErrorResponse) => {
        console.log(resp)
      }
    })
  }

  onLike(input: {adId: number, userId: string}){
    
    let likedAd = this.ads.find(x => x.id == input.adId);
    likedAd.userLikes.push(input.userId);

    this.adsService.putAd$(likedAd).subscribe({
      next: ()=> {
        this.ngOnInit();
      }
    });
  }

  onApply(input: {adId: number, userId: string}){
    let addToApply = this.ads.find(x => x.id == input.adId);
    addToApply.applicants.push(input.userId);

    this.adsService.putAd$(addToApply).subscribe({
      next: ()=> {
        this.ngOnInit();
      }
    });
  }
}
