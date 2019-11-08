import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { StatusCardData } from '../../../@core/data/status-card';
let StatusCardComponent = class StatusCardComponent {
    constructor(statusCardService) {
        this.statusCardService = statusCardService;
        this.on = true;
    }
    switch() {
        this.on = !this.on;
        console.log(this.on);
        if (!this.on) {
            this.statusCardService.switchOff().subscribe();
        }
        else {
            this.statusCardService.switchOn().subscribe();
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], StatusCardComponent.prototype, "title", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], StatusCardComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], StatusCardComponent.prototype, "on", void 0);
StatusCardComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-status-card',
        styleUrls: ['./status-card.component.scss'],
        templateUrl: './status-card.component.html',
    }),
    tslib_1.__metadata("design:paramtypes", [StatusCardData])
], StatusCardComponent);
export { StatusCardComponent };
//# sourceMappingURL=status-card.component.js.map