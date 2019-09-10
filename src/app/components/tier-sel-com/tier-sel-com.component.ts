import { Component, OnInit, ViewChild, Renderer } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

import { NavController } from '@ionic/angular';
import { GlobalVarService } from 'src/app/Services/global-var.service';
import { FooterAgrComponent } from '../footer-agr/footer-agr.component';
@Component({
  selector: 'app-tiersel',
  templateUrl: './tier-sel-com.component.html',
  styleUrls: ['./tier-sel-com.component.scss'],
})
export class TierSelComComponent implements OnInit {
 tiertoggle = false;
 public myForm: FormGroup;
 public myformArray : FormArray;
  private UiCount: number = 1;
  public hide = true;
  rows:any 
  activated = "tier"
 @ViewChild("tierCC",{static: true}) tiercardcon: any;
  constructor( public render: Renderer, public global : GlobalVarService,
    // public attachpage : FooterAgrComponent
    ) {
      this.rows = [];


   }

  ngOnInit() {
    // console.log(this.tiercardcon)
    
  }
  toggletier(){    
   this.hide = !this.hide;
   this.global.SetToggle(this.tiercardcon.el,this.render,this.tiertoggle,this.activated,this.hide);
  }
 
  addControl(){
    this.rows.push({});
  }

  removeControl(i){
    
    this.rows.splice(i , 1) ;
  }
  
}
