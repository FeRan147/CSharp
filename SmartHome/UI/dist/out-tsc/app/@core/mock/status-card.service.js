import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf, of } from 'rxjs';
import { StatusCardData } from '../data/status-card';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
let StatusCardService = class StatusCardService extends StatusCardData {
    constructor(http) {
        super();
        this.http = http;
        this.statusData = {
            value: true,
        };
    }
    getStatus() {
        return observableOf(this.statusData);
    }
    switchOn() {
        return this.http.post('http://localhost:5001/api/Devices/SetLightOn', {}).pipe(map((resp) => {
            return true;
        }), catchError((err => {
            console.log(err);
            return of(false);
        })));
    }
    switchOff() {
        return this.http.post('http://localhost:5001/api/Devices/SetLightOff', {}).pipe(map((resp) => {
            return true;
        }), catchError((err => {
            console.log(err);
            return of(false);
        })));
    }
};
StatusCardService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], StatusCardService);
export { StatusCardService };
//# sourceMappingURL=status-card.service.js.map