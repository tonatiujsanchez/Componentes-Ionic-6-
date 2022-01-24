import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabReactPage } from './tab-react.page';

const routes: Routes = [
  {
    path: '',
    component: TabReactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabReactPageRoutingModule {}
