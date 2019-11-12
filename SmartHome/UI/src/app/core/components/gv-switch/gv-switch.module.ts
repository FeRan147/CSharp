import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GvSwitchComponent } from './gv-switch/gv-switch.component';
import { FormsModule } from '@angular/forms';
import { GvStringTemplateOutletDirective } from '../../addons/string-template-outlet';



@NgModule({
  declarations: [GvSwitchComponent, GvStringTemplateOutletDirective],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [GvSwitchComponent, FormsModule]
})
export class GvSwitchModule { }
