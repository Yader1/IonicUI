import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonfloatPage } from './botonfloat.page';

const routes: Routes = [
  {
    path: '',
    component: BotonfloatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonfloatPageRoutingModule {}
