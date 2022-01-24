import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabReactPageRoutingModule } from './tab-react-routing.module';

import { TabReactPage } from './tab-react.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabReactPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TabReactPage]
})
export class TabReactPageModule {}
