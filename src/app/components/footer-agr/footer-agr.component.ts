import { Component, OnInit, Renderer, ViewChild, Input } from '@angular/core';
import { GlobalVarService } from 'src/app/Services/global-var.service';
import { HeaderAgrComponent } from '../header-agr/header-agr.component';

@Component({
  providers:[HeaderAgrComponent],
  selector: 'app-footer-agr',
  templateUrl: './footer-agr.component.html',
  styleUrls: ['./footer-agr.component.scss'],
})
export class FooterAgrComponent implements OnInit {
  toggle = false;
  public hide = true;
  activated = "foot"
  @ViewChild("tierCC",{static: true}) tiercardcon: any;
  constructor(public render: Renderer, public global: GlobalVarService,
             ) { }

  ngOnInit() {}
  toggletier(){
   this.hide = !this.hide;
   this.global.SetToggle(this.tiercardcon.el,this.render,this.toggle,this.activated,this.hide);
 
  }

  getFileName(event){
    console.log(event.target.value);

  }
  Submit(){
    // this.hdrCom.Setheader();
    this.global.CreateAgreemnt();
  }
}
