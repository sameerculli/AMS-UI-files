import { Component, OnInit } from '@angular/core';
import { GlobalVarService } from 'src/app/Services/global-var.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  providers:[DatePipe],
  selector: 'app-view-agr',
  templateUrl: './view-agr.page.html',
  styleUrls: ['./view-agr.page.scss'],
})
export class ViewAgrPage implements OnInit {
vendordata :any;
selven : any;
Agrdata : any;
  constructor(private global : GlobalVarService,public pipe: DatePipe, public router: Router) { }

  ngOnInit() {
    this.global.getVendor().then(data => {
      this.setVendor(data);      
  });;
  }
setVendor(data){
  this.vendordata = data.d.results;
}
SetSelectedVendor(event){
  this.selven = event.detail.value;
}
showdetail(){
  this.global.getAgreemnetHeader(this.selven).then(data => {
    this.setagr(data);      
  });;
}
setagr(data){
 this.Agrdata = data.d.results;
}
getAgr(data){
 let agrnum = data.AgrNum;
 this.router.navigate(['agr-detail/'+agrnum])
}
}
