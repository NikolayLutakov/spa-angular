import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ad } from 'src/models/ad.model';
import { AdsService } from '../services/ads.service';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {

  formGroup: FormGroup;
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

  constructor(private formBuilder: FormBuilder, private adsService: AdsService, private router: Router) { }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: [''],
      description: [''] ,
      jobcategory: [this.categories[0]],
      type: [this.types[0]]
    });
  }

  onSubmit(): void {
    const ad = this.formGroup.value as Ad;
    
    this.adsService.postAd$(ad).subscribe({
      next: () => {
        this.router.navigate(['/ads']);
      }
    });
  }

}
