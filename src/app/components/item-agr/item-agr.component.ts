import { Component, OnInit, ViewChild, Renderer } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  @ViewChild("itemCC",{static: true}) itemcardcon: any;
  constructor( public render : Renderer,
    private alertCtrl: AlertController) { 
      this.rows = []
    }

  ngOnInit() {}
  // this.toggle = this.global.getTogGleVariable()
  toggleitem(){
  if(this.toggle)
  {
    this.render.setElementStyle(this.itemcardcon.el,"max-height",'0px');
  }else{
    this.render.setElementStyle(this.itemcardcon.el,"max-height",'500px');
  }
  this.toggle = !this.toggle;
  this.hide = !this.hide;
  // this.attachpage.collExp(this.toggle);
  //set the toggle variable for review part
  // this.global.setToGlobalVariable(this.toggle)
  //  this.global.SetToggle(this.tiercardcon.el);
}
add()
  {
    this.rows.push({});
    
  };
  del()
  {
  let i1 : number ;
  for(var i = 0 ; i<this.rows.length; i++) 
  {
   if(this.rows[i].check == true) {
     this.rows.splice(i , 1) ;
    }
  }
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
