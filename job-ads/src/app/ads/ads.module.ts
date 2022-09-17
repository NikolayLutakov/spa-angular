import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AdsRoutingModule } from "./ads-routing.module";
import { AdFormComponent } from "./components/ad-form/ad-form.component";
import { AdItemComponent } from "./components/ad-item/ad-item.component";
import { AdsListComponent } from "./components/ads-list/ads-list.component";
import { AdsComponent } from "./components/ads/ads.component";
import { OrgAdsListComponent } from './components/org-ads-list/org-ads-list.component';
import { OrgAdItemComponent } from './components/org-ad-item/org-ad-item.component';
import { OrgAccManageComponent } from "./components/org-acc-manage/org-acc-manage.component";
import { AdApplicantsListComponent } from './components/ad-applicants-list/ad-applicants-list.component';
import { AdApplicantComponent } from './components/ad-applicant/ad-applicant.component';


@NgModule ({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        AdsRoutingModule
    ],
    declarations: [
        AdsListComponent,
        AdItemComponent,
        AdFormComponent,
        AdsComponent,
        OrgAdsListComponent,
        OrgAdItemComponent,
        OrgAccManageComponent,
        AdApplicantsListComponent,
        AdApplicantComponent
    ]
})
export class AdsModule {

}