import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Ad } from '../../models/ad.model';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-user-acc-manage',
  templateUrl: './user-acc-manage.component.html',
  styleUrls: ['./user-acc-manage.component.scss']
})
export class UserAccManageComponent implements OnInit {

  constructor(private authService: AuthService, private adsService: AdsService, private router: Router) { }

  ads: Ad[];
  user: User;

  ngOnInit(): void {
    this.user = this.authService.getLoggedUserFromLocalStorage();
  }

  onDelete(id: string){
    this.adsService.getAds$().subscribe({
      next: (response: Ad[])=> {
        
        this.ads = [...response.filter(x => x.applicants.includes(this.user.id))];

        for(let ad of this.ads){
          let likeIndex = ad.userLikes.indexOf(this.user.id);
          let aplicantIndex = ad.applicants.indexOf(this.user.id);
          if(likeIndex !== -1){
            ad.userLikes.splice(likeIndex, 1);
          }

          if(aplicantIndex !== -1){
            ad.applicants.splice(aplicantIndex, 1);
          }
          this.adsService.putAd$(ad).subscribe();  
        }
      }
      
    });

    this.authService.deleteAccount$(id).subscribe();
    this.authService.logout();
    this.router.navigate(['/auth', 'login']);
  }
  

}
