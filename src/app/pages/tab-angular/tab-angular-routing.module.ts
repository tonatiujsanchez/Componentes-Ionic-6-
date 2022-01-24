import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAngularPage } from './tab-angular.page';

const routes: Routes = [
  {
    path: '',
    component: TabAngularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAngularPageRoutingModule {}
