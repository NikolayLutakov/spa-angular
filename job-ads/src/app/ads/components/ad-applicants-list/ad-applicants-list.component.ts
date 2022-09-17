import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Ad } from '../../models/ad.model';
import { AdsService } from '../../services/ads.service';

@Component({
  selector: 'app-ad-applicants-list',
  templateUrl: './ad-applicants-list.component.html',
  styleUrls: ['./ad-applicants-list.component.scss']
})
export class AdApplicantsListComponent implements OnInit {

  applicants: User[] = [];
  approvedId: string;
  currAd: Ad;
  destroy$ = new Subject<boolean>();

  constructor(private adsService: AdsService, private router: Router, private route: ActivatedRoute, private authService: AuthService) { }
  ngOnInit(): void {
   
    this.route.params.pipe(
      switchMap((params: Params) => {
        const id = params['id'];
        if(id){
          this.adsService.getAd(id).subscribe({
            next: (response: Ad) => {
              this.currAd = response;
              this.approvedId = response.approvedId;
              let aplicantsIds = [...response.applicants]
              for(let id of aplicantsIds){
                this.authService.getUser$(id).subscribe({
                  next: (response: User) => {
                    this.applicants.push(response)
                  }
                })
              }   
            }
          });
          return this.applicants
        }

        return of(undefined);
      }),
      takeUntil(this.destroy$)
      ).subscribe();   
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onApprove(id: string){
    this.currAd.approvedId = id;

    this.adsService.putAd$(this.currAd).subscribe({
      next: ()=> {
        this.router.navigate(['/main','ads','org',])
      }
    });
  }


}
