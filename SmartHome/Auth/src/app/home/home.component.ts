import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Device } from '@app/_models';
import { DeviceService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    devices: Device[];

    constructor(private deviceService: DeviceService) { }

    ngOnInit() {
        this.loading = true;
        this.deviceService.getAll().pipe(first()).subscribe(devices => {
            this.loading = false;
            this.devices = devices;
        });
    }
}