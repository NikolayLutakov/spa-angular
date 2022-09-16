import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/models/ad.model';
import { AdsService } from '../services/ads.service';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {
  ads: Ad[];
  
  constructor(private adsService: AdsService) {}
  
  ngOnInit(): void {
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
