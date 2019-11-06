import { Injectable } from '@angular/core';
import { of as observableOf, Observable, of } from 'rxjs';
import { StatusCardData, Status } from '../data/status-card';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class StatusCardService extends StatusCardData {

    constructor(private http: HttpClient) {
        super();
    }

    private statusData: Status = {
        value: true,
    };

    getStatus(): Observable<Status> {
        return observableOf(this.statusData);
    }

    switchOn(): Observable<boolean> {
        return this.http.post('http://localhost:5001/api/Devices/SetLightOn', {}).pipe(
            map((resp: any) => {
                return true;
            }),
            catchError(
                (err => {
                    console.log(err);
                    return of(false);
                }),
            ),
        );
    }

    switchOff(): Observable<boolean> {
        return this.http.post('http://localhost:5001/api/Devices/SetLightOff', {}).pipe(
            map((resp: any) => {
                return true;
            }),
            catchError(
                (err => {
                    console.log(err);
                    return of(false);
                }),
            ),
        );
    }
}
