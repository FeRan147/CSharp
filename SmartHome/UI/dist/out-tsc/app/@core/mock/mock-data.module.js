import * as tslib_1 from "tslib";
var MockDataModule_1;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './users.service';
import { TemperatureHumidityService } from './temperature-humidity.service';
import { StatusCardService } from './status-card.service';
const SERVICES = [
    UserService,
    TemperatureHumidityService,
    StatusCardService,
];
let MockDataModule = MockDataModule_1 = class MockDataModule {
    static forRoot() {
        return {
            ngModule: MockDataModule_1,
            providers: [
                ...SERVICES,
            ],
        };
    }
};
MockDataModule = MockDataModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        providers: [
            ...SERVICES,
        ],
    })
], MockDataModule);
export { MockDataModule };
//# sourceMappingURL=mock-data.module.js.map