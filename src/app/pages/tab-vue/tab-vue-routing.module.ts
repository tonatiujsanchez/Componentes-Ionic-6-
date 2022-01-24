import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabVuePage } from './tab-vue.page';

const routes: Routes = [
  {
    path: '',
    component: TabVuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabVuePageRoutingModule {}
