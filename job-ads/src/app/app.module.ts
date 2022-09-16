import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdItemComponent } from './ad-item/ad-item.component';
import { AdFormComponent } from './ad-form/ad-form.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent
  },
  {
    path: 'ads',
    component: AdsListComponent
  },
  {
    path: 'ads/edit',
    component: AdFormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdsListComponent,
    AdItemComponent,
    AdFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
