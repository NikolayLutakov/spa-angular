import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdsComponent } from './components/ads/ads.component';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { AdFormComponent } from './components/ad-form/ad-form.component';
import { AclOrgGuard } from '../guards/acl-org.guard';
import { OrgAdsListComponent } from './components/org-ads-list/org-ads-list.component';
import { OrgAccManageComponent } from './components/org-acc-manage/org-acc-manage.component';
import { AdApplicantsListComponent } from './components/ad-applicants-list/ad-applicants-list.component';

const routes: Route[] = [
  {
    path: '',
    component: AdsComponent,
    children: [
      {
        path: 'ads',
        component: AdsListComponent
      },
      {
        path: 'ads/org/manage',
        component: OrgAccManageComponent
    },
      {
        path: 'ads/org',
        component: OrgAdsListComponent,
        canActivate: [AclOrgGuard]

      },
      {
        path: 'ads/org/applicants/:id',
        component: AdApplicantsListComponent,
        canActivate: [AclOrgGuard]

      },
      {
        path: 'ads/org/edit',
        component: AdFormComponent,
        canActivate: [AclOrgGuard]

      },
      {
        path: 'ads/org/edit/:id',
        component: AdFormComponent,
        canActivate: [AclOrgGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ads'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdsRoutingModule {
}