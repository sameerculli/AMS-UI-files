import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { GlobalVarService } from 'src/app/Services/global-var.service';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DatePicker } from '@ionic-native/date-picker/ngx';
// import * as moment from 'moment';
@Component({
  selector: 'app-header-agr',
  templateUrl: './header-agr.component.html',
  styleUrls: ['./header-agr.component.scss'],
})
export class HeaderAgrComponent implements OnInit {
  toggle = false;
  public hide = true;
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
  @ViewChild("tierCC",{static: true}) tiercardcon: any;
  constructor(public render: Renderer, public global: GlobalVarService,
     public navCtrl: NavController, 
     private datePicker: DatePicker
    //  private http: HttpClient
     ) { 
       

  }

  ngOnInit() {
    this.global.getVendor().then(data => {
      // this.VendorData = data;   
      this.setVendor(data);      
  });;
  }
  toggletier(){
    this.hide = !this.hide;
    this.global.SetToggle(this.tiercardcon.el,this.render,this.toggle,this.activated,this.hide);
   }
   groupArray<T>(dataold: Array<T>, n: number): Array<T[]> {
    let group = new Array<T[]>();
​    let data = dataold;
    console.log(data);
    for (let i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j].push(data[i])
        console.log(group[j]);
    }
​
    return group;
}

 ValidfromDate(ev){
  let date = ev.detail.value;
   this.validfrom = date.split('T')[0];
   
  
}
 ValidtoDate(ev){
  let date = ev.detail.value;
  this.validto = date.split('T')[0];
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
public Setheader(){
  let agr_type = 'ZAMV';
  this.global.SetHeadrdetail(agr_type,
    this.validfrom,this.validto,this.agreement_desc,this.Currency,
    this.calc_basis,this.selectedVendor,this.selectedpart,this.set_cal)
}
}
