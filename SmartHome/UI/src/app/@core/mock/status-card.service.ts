import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { StatusCardData, Status } from '../data/status-card';
import { HttpClient } from '@angular/common/http';

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

    switchOn(): void {
        this.http.post('http://localhost:5001/api/Devices/SetLightOn', null);
    }

    switchOff(): void {
        this.http.post('http://localhost:5001/api/Devices/SetLightOff', null);
    }
}
