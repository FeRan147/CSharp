import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
const routes = [
    {
        path: '',
        component: FormsComponent,
        children: [
            {
                path: 'inputs',
                component: FormInputsComponent,
            },
            {
                path: 'layouts',
                component: FormLayoutsComponent,
            },
            {
                path: 'layouts',
                component: FormLayoutsComponent,
            },
            {
                path: 'buttons',
                component: ButtonsComponent,
            },
            {
                path: 'datepicker',
                component: DatepickerComponent,
            },
        ],
    },
];
let FormsRoutingModule = class FormsRoutingModule {
};
FormsRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes),
        ],
        exports: [
            RouterModule,
        ],
    })
], FormsRoutingModule);
export { FormsRoutingModule };
//# sourceMappingURL=forms-routing.module.js.map