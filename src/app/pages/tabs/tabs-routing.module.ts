import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { TabAngularPage } from '../tab-angular/tab-angular.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'angular',
        loadChildren: () => import('./../tab-angular/tab-angular.module').then( m => m.TabAngularPageModule )
      },
      {
        path: 'react',
        loadChildren: ()=> import('./../tab-react/tab-react.module').then( m => m.TabReactPageModule )
      },
      {
        path: 'vue',
        loadChildren: ()=> import('./../tab-vue/tab-vue.module').then( m => m.TabVuePageModule )
      },
      {
        path: '',
        redirectTo: 'angular',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
