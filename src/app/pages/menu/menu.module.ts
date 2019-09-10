import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'menu/AMS-Home',
  //   pathMatch:'full'
  // },
  {
    path: '',
    component: MenuPage,
  //   children: [
  //     { path: 'create-agr', loadChildren: '../create-agr/create-agr.module#CreateAgrPageModule' },
  //     { path: 'view-agr', loadChildren: '../view-agr/view-agr.module#ViewAgrPageModule' },
  //     { path: 'view-accrual', loadChildren: '../view-accrual/view-accrual.module#ViewAccrualPageModule' },
  //     { path: 'calc-rebate', loadChildren: '../calc-rebate/calc-rebate.module#CalcRebatePageModule' },
  //     { path: 'tr-header', loadChildren: '../tr-header/tr-header.module#TRHeaderPageModule' },
  //     { path: 'menu', loadChildren: '../menu/menu.module#MenuPageModule' },
  //   ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
