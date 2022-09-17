import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private authService: AuthService, private adsService: AdsService) {}
  
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

  onDelete(id: number){
    this.adsService.deleteAd$(id).subscribe({
      next: ()=> {
        this.ads = this.ads.filter(x => x.id !== id);
      }
    });
  }
}
