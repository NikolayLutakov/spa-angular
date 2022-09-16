import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/models/ad-models/ad.model';
import { AdsService } from '../services/ads.sedrvice';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ads: Ad[];
  
  constructor(private adsService: AdsService) { 
    this.ads = [];
  }

  ngOnInit(): void {
    this.adsService.getAds$().subscribe({
      next: (response: Ad[]) => {
        this.ads = response;
        console.log(this.ads);
      },
      error: (resp: HttpErrorResponse) => {
        console.log(resp)
      }
    })
  }

}
