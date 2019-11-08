import * as tslib_1 from "tslib";
var CoreModule_1;
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AnalyticsService, LayoutService, PlayerService, StateService, } from './utils';
import { UserData } from './data/users';
import { TemperatureHumidityData } from './data/temperature-humidity';
import { StatusCardData } from './data/status-card';
import { UserService } from './mock/users.service';
import { TemperatureHumidityService } from './mock/temperature-humidity.service';
import { StatusCardService } from './mock/status-card.service';
import { MockDataModule } from './mock/mock-data.module';
const socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'twitter',
    },
];
const DATA_SERVICES = [
    { provide: UserData, useClass: UserService },
    { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
    { provide: StatusCardData, useClass: StatusCardService },
];
export class NbSimpleRoleProvider extends NbRoleProvider {
    getRole() {
        // here you could provide any role based on any auth flow
        return observableOf('guest');
    }
}
export const NB_CORE_PROVIDERS = [
    ...MockDataModule.forRoot().providers,
    ...DATA_SERVICES,
    ...NbAuthModule.forRoot({
        strategies: [
            NbDummyAuthStrategy.setup({
                name: 'email',
                delay: 3000,
            }),
        ],
        forms: {
            login: {
                socialLinks: socialLinks,
            },
            register: {
                socialLinks: socialLinks,
            },
        },
    }).providers,
    NbSecurityModule.forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
    },
    AnalyticsService,
    LayoutService,
    PlayerService,
    StateService,
];
let CoreModule = CoreModule_1 = class CoreModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    static forRoot() {
        return {
            ngModule: CoreModule_1,
            providers: [
                ...NB_CORE_PROVIDERS,
            ],
        };
    }
};
CoreModule = CoreModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        exports: [
            NbAuthModule,
        ],
        declarations: [],
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, SkipSelf()),
    tslib_1.__metadata("design:paramtypes", [CoreModule])
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map