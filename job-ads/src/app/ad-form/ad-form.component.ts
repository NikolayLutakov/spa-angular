import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of, Subject, switchMap, take, takeUntil } from 'rxjs';
import { Ad } from 'src/models/ad.model';
import { AdsService } from '../services/ads.service';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;

  destroy$ = new Subject<boolean>();

  categories = [
    'Accounting and Consulting',
    'Admin Support',
    'Customer Service',
    'Data Science and Analysis',
    'Design and Creative',
    'Engineering and Architecture',
    'IT & Networking',
    'Legal',
    'Sales and Marketing',
    'Translation',
    'Web, Mobile, & Software Development',
    'Writing'];
  types = [
    'full-time',
    'part-time',
    'remote'
  ];

  constructor(private formBuilder: FormBuilder, private adsService: AdsService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.buildForm();

    this.route.params.pipe(
      switchMap((params: Params) => {
        const id = params['id'];
        
        if(id){
          return this.adsService.getAd(id);
        }

        return of(undefined);
      }),
      takeUntil(this.destroy$)
      ).subscribe({
      next: (response) => {
        this.buildForm(response)
        }
    });   
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmit(): void {
    const ad = this.formGroup.value as Ad;
    
    let request$;

    if(ad.id){
      request$ = this.adsService.putAd$(ad)
    } else {
      request$ = this.adsService.postAd$(ad)
    }

   request$.subscribe({
      next: () => {
        this.router.navigate(['/ads']);
      }
    });
  }

  private buildForm(ad?: Ad): void{
    this.formGroup = this.formBuilder.group({
      id: [ad?.id],
      title: [ad?.title || ''],
      description: [ad?.description || ''] ,
      category: [this.categories.find(x => x === ad?.category) || this.categories[0]],
      type: [this.types.find(x => x === ad?.type) || this.types[0]],
      likesCount: [ad?.likesCount || 0],
      creatorId: [ad?.creatorId || 1],
      applicants: [ad?.applicants || []],
      approvedId: [ad?.approvedId || 0],
      isDeactivated: [ad?.isDeactivated || false],
      isDeleted: [ad?.isDeleted || false]
    });
  }
}
