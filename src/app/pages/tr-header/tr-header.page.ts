import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from 'src/app/Services/global-var.service';

@Component({
  selector: 'app-tr-header',
  templateUrl: './tr-header.page.html',
  styleUrls: ['./tr-header.page.scss'],
})
export class TRHeaderPage implements OnInit {
 trheader : any;
  constructor(private router: Router , public global:GlobalVarService ) {
    this.global.getTRheader().then(data => {
      this.settrheader(data);
    });
   }

  ngOnInit() {
  }
  gettrheader(ev,tr){
    let trnum = tr.Trid ;
    this.router.navigate(['tr-item/'+trnum])
  }
  settrheader(data){
   this.trheader = data.d.results;
  }
}
