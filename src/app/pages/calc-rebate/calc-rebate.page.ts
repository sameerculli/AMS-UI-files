import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbCalendar, NgbDateStruct, NgbDatepicker, NgbDateAdapter, NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-calc-rebate',
  templateUrl: './calc-rebate.page.html',
  styleUrls: ['./calc-rebate.page.scss'],
  providers: [NgbDatepicker,NgbDatepickerModule]
})
export class CalcRebatePage implements OnInit {
i = 1;
model: NgbDateStruct;
// @ViewChild(NgbDatepicker) date: NgbDatepicker;
@ViewChild("date1",{static: true}) date1: NgbDatepicker;
  constructor(public http : HttpClient,private calendar: NgbCalendar,
              private da: NgbDatepickerModule ) { }

  ngOnInit() {
  }
  CalcRebate(){  
    if (this.i == 1) {
      var url = "http://localhost:8082/rebates.svc/Accrual";
      return new Promise(resolve => {
        this.http.get(url).subscribe(data => {resolve(data);
          this.i = this.i + 1;
          alert('Rebates has been calculated!!');
        },
        err => {
            console.log(err);
        })
    })}
    else{
      alert('No Active agreement found for Accrual')
    }
  } 
  toggle(){
    // date1 = this.da.t
    this.model = this.calendar.getToday();
    console.log(this.model)
  }
}
