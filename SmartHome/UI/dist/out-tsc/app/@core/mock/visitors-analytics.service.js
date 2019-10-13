import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { PeriodsService } from './periods.service';
import { VisitorsAnalyticsData } from '../data/visitors-analytics';
let VisitorsAnalyticsService = class VisitorsAnalyticsService extends VisitorsAnalyticsData {
    constructor(periodService) {
        super();
        this.periodService = periodService;
        this.pieChartValue = 75;
        this.innerLinePoints = [
            94, 188, 225, 244, 253, 254, 249, 235, 208,
            173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
            183, 224, 265, 302, 333, 358, 375, 388, 395,
            400, 400, 397, 390, 377, 360, 338, 310, 278,
            241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
        ];
        this.outerLinePoints = [
            85, 71, 59, 50, 45, 42, 41, 44, 58, 88,
            136, 199, 267, 326, 367, 391, 400, 397,
            376, 319, 200, 104, 60, 41, 36, 37, 44,
            55, 74, 100, 131, 159, 180, 193, 199, 200,
            195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11,
        ];
    }
    generateOutlineLineData() {
        const months = this.periodService.getMonths();
        const outerLinePointsLength = this.outerLinePoints.length;
        const monthsLength = months.length;
        return this.outerLinePoints.map((p, index) => {
            const monthIndex = Math.round(index / 4);
            const label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
                ? months[monthIndex]
                : '';
            return {
                label,
                value: p,
            };
        });
    }
    getInnerLineChartData() {
        return observableOf(this.innerLinePoints);
    }
    getOutlineLineChartData() {
        return observableOf(this.generateOutlineLineData());
    }
    getPieChartData() {
        return observableOf(this.pieChartValue);
    }
};
VisitorsAnalyticsService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [PeriodsService])
], VisitorsAnalyticsService);
export { VisitorsAnalyticsService };
//# sourceMappingURL=visitors-analytics.service.js.map