import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddplatoPageRoutingModule } from './addplato-routing.module';

import { AddplatoPage } from './addplato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddplatoPageRoutingModule
  ],
  declarations: [AddplatoPage]
})
export class AddplatoPageModule {}
