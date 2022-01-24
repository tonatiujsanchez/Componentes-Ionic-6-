import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabAngularPageRoutingModule } from './tab-angular-routing.module';

import { TabAngularPage } from './tab-angular.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabAngularPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TabAngularPage]
})
export class TabAngularPageModule {}
