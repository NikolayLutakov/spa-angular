import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/aut.guard";
import { NonAuthGuard } from "./guards/non-auth.guard";

const routes: Route[] = [
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
      canLoad: [NonAuthGuard] 
    },
    {
      path: 'main',
      loadChildren: () => import('./ads/ads.module').then(m => m.AdsModule),
      canLoad: [AuthGuard]     
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'main'
    }
    
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule {
}