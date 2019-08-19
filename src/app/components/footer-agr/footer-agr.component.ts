import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { GlobalVarService } from 'src/app/Services/global-var.service';

@Component({
  selector: 'app-footer-agr',
  templateUrl: './footer-agr.component.html',
  styleUrls: ['./footer-agr.component.scss'],
})
export class FooterAgrComponent implements OnInit {
  toggle = false;
  public hide = true;
  @ViewChild("tierCC",{static: true}) tiercardcon: any;
  constructor(public render: Renderer, public global: GlobalVarService) { }

  ngOnInit() {}
  toggletier(){
   this.hide = !this.hide;
   this.global.SetToggle(this.tiercardcon.el,this.render,this.toggle);
  }

  getFileName(event){
    console.log(event.target.value);

  }
   
}
