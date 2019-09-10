import { Component, OnInit } from '@angular/core';
import { GlobalVarService } from 'src/app/Services/global-var.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agr-detail',
  templateUrl: './agr-detail.page.html',
  styleUrls: ['./agr-detail.page.scss'],
})
export class AgrDetailPage implements OnInit {
 agritem:any;
 agrstore:any;
 agrtier:any;
 agreement:any;
  constructor(private global: GlobalVarService, private router: ActivatedRoute) { 
    this.agreement = this.router.snapshot.paramMap.get('agrnum');
    this.global.getAgrItem(this.agreement).then(data => {
      this.setitem(data);  
    });
    this.global.getAgrstore(this.agreement).then(data => {
      this.setstore(data);  
    });
    this.global.getAgrtier(this.agreement).then(data => {
      this.settier(data);  
    });
  }

  ngOnInit() {
  }
setitem(data){
   this.agritem = data.d.results;
}
setstore(data){
  this.agrstore = data.d.results;
}
settier(data){
  this.agrtier = data.d.results;
}
}
