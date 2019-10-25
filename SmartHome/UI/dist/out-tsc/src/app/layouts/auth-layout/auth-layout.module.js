import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { RtlComponent } from '../../pages/rtl/rtl.component';
var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(AuthLayoutRoutes),
                FormsModule,
                HttpClientModule,
                NgbModule
            ],
            declarations: [
                RtlComponent,
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());
export { AuthLayoutModule };
//# sourceMappingURL=auth-layout.module.js.map