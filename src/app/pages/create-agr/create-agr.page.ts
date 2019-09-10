
import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { GlobalVarService } from 'src/app/Services/global-var.service';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { DatePicker } from '@ionic-native/date-picker/ngx';
// import * as moment from 'moment';
import { AlertController } from '@ionic/angular';
// import { timeout } from 'q';
@Component({
  selector: 'app-create-agr',
  templateUrl: './create-agr.page.html',
  styleUrls: ['./create-agr.page.scss'],
})
export class CreateAgrPage implements OnInit {
  tiertoggle = false;
  toggle = false;
  hide_item = true;
  hide_tier = true;
  hide_store = true;
  hide_foot = true;
  fields: any[];
  field : any;
  group: any[][];
  index: number = 0;
  activated = "head";
  agreement_type = 'Volume Agreement';
  validfrom: any;
  validto:any;
  agreement_desc: any;
  Currency = 'GBP';
  calc_basis = 'P';
  VendorData: any;
  PartnerData:any;
  selectedVendor: any;
  set_cal:any;
  selectedpart:any;
  tier_rows:any 
  item_rows:any 
  store_rows : any;
  item:any
  deptdata: any;
  ItemData: any;
  finaldeptItemdata: any;
  FilterItemData : any;
  department:any;
  Tovalue: any;
  Fromvalue: any;
  Tierrate:any;
  storedata : any;
  selStore: any;
  finalstore: any;
  index_item:any;
  hide_dep = false;
  hide_idetail = false;
  @ViewChild("itemCC",{static: true}) itemcardcon: any;
  @ViewChild("tierCC",{static: true}) tiercardcon: any;
  @ViewChild("storeCC",{static: true}) storecardcon: any;
  @ViewChild("footCC",{static: true}) footcardcon: any;
  constructor(public render: Renderer, public global: GlobalVarService,
    public navCtrl: NavController, 
    // private datePicker: DatePicker,
    private alertCtrl: AlertController,) {
      this.tier_rows = [];
      this.item_rows = [];
      this.store_rows = [];
      this.finaldeptItemdata = [];
      this.finalstore = [];
      
   }

  ngOnInit() {
    this.global.getVendor().then(data => {
      // this.VendorData = data;   
      this.setVendor(data);      
  });;
  this.global.getDepartment().then(data => {
    // this.VendorData = data;   
    this.setdepartment(data);      
});;

this.global.getStores().then(data => {
  // this.VendorData = data;   
  this.setstore(data);      
});;

  }
  ValidfromDate(ev){
    let date = ev.detail.value;
     this.validfrom = date.split('+')[0];
     
    
  }
   ValidtoDate(ev){
    let date = ev.detail.value;
    this.validto = date.split('+')[0];;
    
  }
   setVendor(data){
   this.PartnerData = this.VendorData = data.d.results;
  }
  SetSelectedVendor(ev){
  this.selectedVendor = ev.detail.value.split(' ')[0];
  }
  SetSelectedpart(ev){
  this.selectedpart = ev.detail.value.split(' ')[0];
  
    // this.Setheader();
  }
 Setheader(){
    let agr_type = 'ZAMV';
    this.global.SetHeadrdetail(agr_type,this.validfrom,this.validto,this.agreement_desc,this.Currency,
                              this.calc_basis,this.selectedVendor,this.selectedpart,this.set_cal)
  }
  //////////////////////////// item methods
  toggleitem(){  
    this.hide_item = !this.hide_item;
    this.hide_foot = true;
    this.hide_store = true;
    this.hide_tier = true;
    this.global.SetToggle(this.itemcardcon.el,this.render,this.toggle,this.activated,this.hide_item);
 }
 add()
   {
     this.item_rows.push({ department:[],ItemData : []});
   };
   del(i)
   {
  //  for(let index in this.finaldeptItemdata ){
  //    if (this.department == this.finaldeptItemdata[index].Department ){
  //    this.finaldeptItemdata.splice(index,1);
  //   }
  //  }
   this.item_rows.splice(i , 1) ;
   this.finaldeptItemdata =[];
  for( let j in this.item_rows){
    
   this.department=this.item_rows[j].department;
   for(let index in this.item_rows[j].item){
   let array = {'Department' : this.department, 'ItemNumber': this.item_rows[j].item[index]};
   this.finaldeptItemdata.push(array);
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
setdepartment(data){
     this.deptdata = data.d.results;
    }
selectedDepartment(i,ev){
  this.hide_dep = true;
  let dept = ev.detail.value.split(' ')[1];
  this.department = dept;
  
// this.finaldeptItemdata.push(dept);
}
getitem(index){
  this.index_item = index;
  this.department=this.item_rows[index].department;
  this.global.getItem(this.item_rows[index].department).then(data => {
    this.setitem(data,this.index_item);      
  });; 
}
setitem(data,index){
 this.item_rows[index].ItemData = data.d.results;
}
selectedItem(i,event){
  this.hide_idetail = true;
  let item =[];
  item = event.detail.value;
  for(let index in item){
  let array = {'Department': this.department, 'ItemNumber':item[index]};
  this.finaldeptItemdata.push(array);
  }
}
setitemvalue(){
   this.global.SetItem(this.finaldeptItemdata);
}
//////////////////////////////////////tier select

toggletier(){    
  this.hide_tier = !this.hide_tier;
    this.hide_foot = true;
    this.hide_store = true;
    this.hide_item = true;
  this.global.SetToggle(this.tiercardcon.el,this.render,this.tiertoggle,this.activated,this.hide_tier);
 }

 addControl(){
   this.tier_rows.push({});
 }

 removeControl(i){
   
   this.tier_rows.splice(i , 1) ;
 }
 settier(){
  this.global.SetTier(this.Tovalue,this.Fromvalue,this.Tierrate);
}

 //////////////////////////////////////Store

togglestore(){    
  this.hide_store = !this.hide_store;
    this.hide_foot = true;
    this.hide_item = true;
    this.hide_tier = true;
  this.global.SetToggle(this.storecardcon.el,this.render,this.tiertoggle,this.activated,this.hide_tier);
 }

 addControlstr(){
   this.store_rows.push({});
 }

 removeControlstr(i){
   
   this.store_rows.splice(i , 1) ;
 }
 
setstore(data){
  this.storedata = data.d.results;
}
selectedStore(i,ev){
  this.selStore =  ev.detail.value.split(' ')[1];     
  let array = {'StoreID': parseInt(this.selStore)}
  this.finalstore.push(array);
}
setstoredetail(){
  this.global.setstore(this.finalstore);
}
//////////////////////////////////footer
togglefoot(){
  this.hide_foot = !this.hide_foot;
    this.hide_item = true;
    this.hide_store = true;
    this.hide_tier = true;
  this.global.SetToggle(this.footcardcon.el,this.render,this.toggle,this.activated,this.hide_foot);

 }

 getFileName(event){
   console.log(event.target.value);

 }
 Submit(){
  this.Setheader();
  this.setitemvalue()
  this.settier();
  this.setstoredetail();
  this.global.CreateAgreemnt();
 }
}
