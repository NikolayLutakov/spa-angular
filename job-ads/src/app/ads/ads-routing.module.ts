import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdsComponent } from './components/ads/ads.component';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { AdFormComponent } from './components/ad-form/ad-form.component';
import { AclOrgGuard } from '../guards/acl-org.guard';

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
        path: 'ads/edit',
        component: AdFormComponent,
        canActivate: [AclOrgGuard]

      },
      {
        path: 'ads/edit/:id',
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