import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonfloatPageRoutingModule } from './botonfloat-routing.module';

import { BotonfloatPage } from './botonfloat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonfloatPageRoutingModule
  ],
  declarations: [BotonfloatPage]
})
export class BotonfloatPageModule {}
