import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateAgrPage } from './create-agr.page';
import { TierSelComComponent } from 'src/app/components/tier-sel-com/tier-sel-com.component';
import { FooterAgrComponent } from 'src/app/components/footer-agr/footer-agr.component';
import { ItemAgrComponent } from 'src/app/components/item-agr/item-agr.component';
import { HeaderAgrComponent } from 'src/app/components/header-agr/header-agr.component';


const routes: Routes = [
  {
    path: '',
    component: CreateAgrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateAgrPage,TierSelComComponent,FooterAgrComponent,
                 ItemAgrComponent,HeaderAgrComponent]
})
export class CreateAgrPageModule {}
