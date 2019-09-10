import { Component, OnInit } from '@angular/core';
import { GlobalVarService } from 'src/app/Services/global-var.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-accrualitem',
  templateUrl: './view-accrualitem.page.html',
  styleUrls: ['./view-accrualitem.page.scss'],
})
export class ViewAccrualitemPage implements OnInit {
  accrualitem : any 
  agreement:any
  accrualiteminfo : any 
  accrualitemtemp1 : any
  constructor(public global: GlobalVarService,public router : ActivatedRoute) { 
  this.agreement = this.router.snapshot.paramMap.get('agr');
    
  }

  ngOnInit() {
    this.global.getAccrualitem(this.agreement).then(data => {
      this.accrualiteminfo = data ;
      this.accrualitem  = this.accrualiteminfo.d.results ;     
    });;
  }

}
