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
 toggle = false;
 public myForm: FormGroup;
 public myformArray : FormArray;
  private UiCount: number = 1;
  public hide = true;
  rows:any 
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
   this.toggle = this.global.getTogGleVariable()
    if(this.toggle)
    {
      this.render.setElementStyle(this.tiercardcon.el,"max-height",'0px');
    }else{
      this.render.setElementStyle(this.tiercardcon.el,"max-height",'500px');
    }
    this.toggle = !this.toggle;
    this.hide = !this.hide;
    // this.attachpage.collExp(this.toggle);
    //set the toggle variable for review part
    // this.global.setToGlobalVariable(this.toggle)
    //  this.global.SetToggle(this.tiercardcon.el);
  }
  addControl(){
    this.rows.push({});
  }

  removeControl(i){
    
    this.rows.splice(i , 1) ;
  }
  
}
