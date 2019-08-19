import { Injectable, Renderer, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})
export class GlobalVarService {
 Globaltoggle = false;
 svcRenderer : Renderer;
  constructor(  ) { 
    this.Globaltoggle = false;
  }
  getTogGleVariable(){
    this.Globaltoggle = false;
    return this.Globaltoggle ;
  }
  setToGlobalVariable(value){
    this.Globaltoggle = value;
  }
  // SetToggle(ui){
  //    if(this.Globaltoggle)
  //   {
  //     this.render.setElementStyle(ui,"max-height",'0px');
  //   }else{
  //     this.render.setElementStyle(ui,"max-height",'500px');
  //   }
  //   this.Globaltoggle = !this.Globaltoggle;
    
    //set the Globaltoggle variable for review part
    // this.global.setToGlobalVariable(this.toggle)
  // }
}
