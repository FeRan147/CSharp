import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
const routes = [{
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'iot-dashboard',
                component: DashboardComponent,
            },
            {
                path: '',
                redirectTo: 'iot-dashboard',
                pathMatch: 'full',
            },
            {
                path: '**',
                component: NotFoundComponent,
            },
        ],
    }];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PagesRoutingModule);
export { PagesRoutingModule };
//# sourceMappingURL=pages-routing.module.js.map