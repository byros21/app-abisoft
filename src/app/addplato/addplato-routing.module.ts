import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddplatoPage } from './addplato.page';

const routes: Routes = [
  {
    path: '',
    component: AddplatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddplatoPageRoutingModule {}
