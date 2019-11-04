import { Component, Input } from '@angular/core';
import { Status, StatusCardData } from '../../../@core/data/status-card';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="switch()" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status paragraph-2">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
    @Input() on = true;

    constructor(private statusCardService: StatusCardData) { }

    switch() {
        this.on = !this.on;

        if (this.on = true) {
            this.statusCardService.switchOff();
        } else {
            this.statusCardService.switchOn();
        }
    }
}
