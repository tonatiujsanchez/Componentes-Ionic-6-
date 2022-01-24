import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabVuePageRoutingModule } from './tab-vue-routing.module';

import { TabVuePage } from './tab-vue.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabVuePageRoutingModule,
    ComponentsModule
  ],
  declarations: [TabVuePage]
})
export class TabVuePageModule {}
