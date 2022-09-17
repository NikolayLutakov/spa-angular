import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Ad } from '../../models/ad.model';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-org-acc-manage',
  templateUrl: './org-acc-manage.component.html',
  styleUrls: ['./org-acc-manage.component.scss']
})
export class OrgAccManageComponent implements OnInit {

  constructor(private authService: AuthService, private adsService: AdsService, private router: Router) { }

  ads: Ad[];
  user: User;

  ngOnInit(): void {
    this.user = this.authService.getLoggedUserFromLocalStorage();
  }

  onDelete(id: string){
    this.adsService.getAds$().subscribe({
      next: (response: Ad[])=> {
        
        this.ads = [...response.filter(x => x.creatorId == this.user.id)];

        for(let ad of this.ads){
          ad.isDeactivated = true;
          this.adsService.putAd$(ad).subscribe();

          
        }
      }
    });

    this.authService.deleteAccount$(id).subscribe();
    this.authService.logout();
    this.router.navigate(['/auth', 'login']);
  }
}
