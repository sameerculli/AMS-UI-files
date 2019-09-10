import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalVarService } from 'src/app/Services/global-var.service';

@Component({
  selector: 'app-tr-item',
  templateUrl: './tr-item.page.html',
  styleUrls: ['./tr-item.page.scss'],
})
export class TRItemPage implements OnInit {
trnum : any;
tritem : any;
  constructor(private router: ActivatedRoute , public global:GlobalVarService ) {
    this.trnum = this.router.snapshot.paramMap.get('trnum');
    this.global.getTRitem(this.trnum).then(data => {
      this.settritem(data);
    }); }

  ngOnInit() {
  }
settritem(data){
  this.tritem = data.d.results;
}
}
