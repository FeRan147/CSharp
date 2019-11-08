import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Device } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class DeviceService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Device[]>(`${environment.apiUrl}/api/Devices`);
    }
}