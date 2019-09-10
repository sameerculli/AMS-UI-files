import { Component, OnInit } from '@angular/core';
import { GlobalVarService } from 'src/app/Services/global-var.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-accrual',
  templateUrl: './view-accrual.page.html',
  styleUrls: ['./view-accrual.page.scss'],
})
export class ViewAccrualPage implements OnInit {
  accrualheader : any 
  accrualitem : any
  accrualhdrinfo : any 
  agrnum : any
  constructor(private router: Router , public global:GlobalVarService ,) {
    this.global.getAccrualhdr().then(data => {
      this.accrualhdrinfo = data ;
      this.accrualheader = this.accrualhdrinfo.d.results ;
    }); }

  ngOnInit() {
  }
  navigate(event,accr) {
    let agrnum = accr.AgreementNumber ;
      this.router.navigate(['view-accrualitem/'+agrnum])
    }
}
