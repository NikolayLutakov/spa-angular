import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AdsRoutingModule } from "./ads-routing.module";
import { AdFormComponent } from "./components/ad-form/ad-form.component";
import { AdItemComponent } from "./components/ad-item/ad-item.component";
import { AdsListComponent } from "./components/ads-list/ads-list.component";
import { AdsComponent } from "./components/ads/ads.component";


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
        AdsComponent
    ]
})
export class AdsModule {

}