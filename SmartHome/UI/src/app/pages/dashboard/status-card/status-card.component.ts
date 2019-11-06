import { Component, Input } from '@angular/core';
import { Status, StatusCardData } from '../../../@core/data/status-card';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  templateUrl: './status-card.component.html',
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
    @Input() on = true;

    constructor(private statusCardService: StatusCardData) { }

    switch() {
        this.on = !this.on;
        console.log(this.on);

        if (this.on) {
            this.statusCardService.switchOff().subscribe();
        } else {
            this.statusCardService.switchOn().subscribe();
        }
    }
}
