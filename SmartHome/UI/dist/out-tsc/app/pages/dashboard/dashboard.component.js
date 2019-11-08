import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
let DashboardComponent = class DashboardComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.alive = true;
        this.lightCard = {
            title: 'Light',
            iconClass: 'nb-lightbulb',
            type: 'primary',
        };
        this.commonStatusCardsSet = [
            this.lightCard,
        ];
        this.statusCardsByThemes = {
            default: this.commonStatusCardsSet,
            cosmic: this.commonStatusCardsSet,
            corporate: [
                Object.assign({}, this.lightCard, { type: 'warning' }),
            ],
            dark: this.commonStatusCardsSet,
        };
        this.themeService.getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
            this.statusCards = this.statusCardsByThemes[theme.name];
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-dashboard',
        styleUrls: ['./dashboard.component.scss'],
        templateUrl: './dashboard.component.html',
    }),
    tslib_1.__metadata("design:paramtypes", [NbThemeService])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map