import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'AMS-Home', pathMatch: 'full' },
  { path: 'AMS-Home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'create-agr', loadChildren: './pages/create-agr/create-agr.module#CreateAgrPageModule' },
  { path: 'view-agr', loadChildren: './pages/view-agr/view-agr.module#ViewAgrPageModule' },
  { path: 'view-accrual', loadChildren: './pages/view-accrual/view-accrual.module#ViewAccrualPageModule' },
  { path: 'view-accrualitem/:agr', loadChildren: './pages/view-accrualitem/view-accrualitem.module#ViewAccrualitemPageModule' },
  { path: 'calc-rebate', loadChildren: './pages/calc-rebate/calc-rebate.module#CalcRebatePageModule' },
  { path: 'tr-header', loadChildren: './pages/tr-header/tr-header.module#TRHeaderPageModule' },
  { path: 'tr-item/:trnum', loadChildren: './pages/tr-item/tr-item.module#TRItemPageModule' },
  { path: 'agr-detail/:agrnum', loadChildren: './pages/agr-detail/agr-detail.module#AgrDetailPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
