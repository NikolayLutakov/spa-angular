import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AclOrgGuard } from "../guards/acl-org.guard";
import { AuthComponent } from "./components/auth/auth.component";
import { LoginComponent } from "./components/login/login.component";
import { OrgAccManageComponent } from "../ads/components/org-acc-manage/org-acc-manage.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Route[] = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
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
export class AuthRoutingModule{

}