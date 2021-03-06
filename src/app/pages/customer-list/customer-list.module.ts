import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerListPageRoutingModule } from './customer-list-routing.module';

import { CustomerListPage } from './customer-list.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CustomerListPage]
})
export class CustomerListPageModule {}
