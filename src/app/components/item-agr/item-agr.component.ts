import { Component, OnInit, ViewChild, Renderer } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GlobalVarService } from 'src/app/Services/global-var.service';

@Component({
  selector: 'app-item',
  templateUrl: './item-agr.component.html',
  styleUrls: ['./item-agr.component.scss'],
})
export class ItemAgrComponent implements OnInit {
  toggle = false;
  hide = true;
  rows:any 
  item:any
  activated = "item"
  @ViewChild("itemCC",{static: true}) itemcardcon: any;
  constructor( public render : Renderer,
    private alertCtrl: AlertController,
    public global: GlobalVarService) { 
      this.rows = []
    }

  ngOnInit() {}
  // this.toggle = this.global.getTogGleVariable()
  toggleitem(){  
   this.hide = !this.hide;
   this.global.SetToggle(this.itemcardcon.el,this.render,this.toggle,this.activated,this.hide);
}
add()
  {
    this.rows.push({});
    
  };
  del(i)
  {
  
  this.rows.splice(i , 1) ;
  };
  async selitem() {
    let prompt = await this.alertCtrl.create({
      message: 'ItemDetails',
      inputs : [
      {
          type:'radio',
          label:'Item1',
          value:'Item1'
      },
      {
          type:'radio',
          label:'Item2',
          value:'Item2'
      }],
      buttons : [
      {
          text: "Cancel",
          handler: data => {
          console.log("cancel clicked");
          }
      },
      {
          text: "OK",
          handler: data => {
          console.log("Ok clicked");
          }
      }]});
  
      await prompt.present();
    }
}
