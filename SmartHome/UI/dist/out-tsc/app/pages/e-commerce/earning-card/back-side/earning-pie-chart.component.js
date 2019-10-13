import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { delay, takeWhile } from 'rxjs/operators';
let EarningPieChartComponent = class EarningPieChartComponent {
    constructor(theme) {
        this.theme = theme;
        this.selectPie = new EventEmitter();
        this.alive = true;
        this.options = {};
    }
    onChartInit(ec) {
        this.echartsInstance = ec;
    }
    onChartClick(event) {
        const pieData = {
            value: event.value,
            name: event.name,
            color: event.color.colorStops[0].color,
        };
        this.emitSelectPie(pieData);
    }
    emitSelectPie(pieData) {
        this.selectPie.emit(pieData);
    }
    ngAfterViewInit() {
        this.theme.getJsTheme()
            .pipe(takeWhile(() => this.alive), delay(1))
            .subscribe(config => {
            const variables = config.variables;
            this.options = this.getOptions(variables);
            const defaultSelectedData = this.options.series[0].data.find((item) => item.name === this.defaultSelectedCurrency);
            const color = defaultSelectedData.itemStyle.normal.color.colorStops[0].color;
            const pieData = {
                value: defaultSelectedData.value,
                name: defaultSelectedData.name,
                color,
            };
            this.emitSelectPie(pieData);
        });
    }
    getOptions(variables) {
        const earningPie = variables.earningPie;
        return {
            tooltip: {
                trigger: 'item',
                formatter: '',
            },
            series: [
                {
                    name: ' ',
                    clockWise: true,
                    hoverAnimation: false,
                    type: 'pie',
                    center: earningPie.center,
                    radius: earningPie.radius,
                    data: [
                        {
                            value: this.values[0].value,
                            name: this.values[0].name,
                            label: {
                                normal: {
                                    position: 'center',
                                    formatter: '',
                                    textStyle: {
                                        fontSize: '22',
                                        fontFamily: variables.fontSecondary,
                                        fontWeight: '600',
                                        color: variables.fgHeading,
                                    },
                                },
                            },
                            tooltip: {
                                show: false,
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: earningPie.firstPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: earningPie.firstPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: earningPie.firstPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                        },
                        {
                            value: this.values[1].value,
                            name: this.values[1].name,
                            label: {
                                normal: {
                                    position: 'center',
                                    formatter: '',
                                    textStyle: {
                                        fontSize: '22',
                                        fontFamily: variables.fontSecondary,
                                        fontWeight: '600',
                                        color: variables.fgHeading,
                                    },
                                },
                            },
                            tooltip: {
                                show: false,
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: earningPie.secondPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: earningPie.secondPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: earningPie.secondPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                        },
                        {
                            value: this.values[2].value,
                            name: this.values[2].name,
                            label: {
                                normal: {
                                    position: 'center',
                                    formatter: '',
                                    textStyle: {
                                        fontSize: '22',
                                        fontFamily: variables.fontSecondary,
                                        fontWeight: '600',
                                        color: variables.fgHeading,
                                    },
                                },
                            },
                            tooltip: {
                                show: false,
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: earningPie.thirdPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: earningPie.thirdPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: earningPie.thirdPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                        },
                    ],
                },
            ],
        };
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], EarningPieChartComponent.prototype, "selectPie", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], EarningPieChartComponent.prototype, "values", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], EarningPieChartComponent.prototype, "defaultSelectedCurrency", void 0);
EarningPieChartComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-earning-pie-chart',
        styleUrls: ['./earning-card-back.component.scss'],
        template: `
    <div echarts
         class="echart"
         [options]="options"
         (chartInit)="onChartInit($event)"
         (chartClick)="onChartClick($event)">
    </div>
  `,
    }),
    tslib_1.__metadata("design:paramtypes", [NbThemeService])
], EarningPieChartComponent);
export { EarningPieChartComponent };
//# sourceMappingURL=earning-pie-chart.component.js.map