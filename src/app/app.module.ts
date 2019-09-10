import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {NgbModule, NgbDatepickerModule, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { DatePickerModule } from 'ionic-calendar-date-picker';
// import { DatePickerModule } from 'ionic4-date-picker';
// import { DatePicker } from '@ionic-native/date-picker/ngx';
// import { Ionic4DatepickerModule } from
//     '@logisticinfotech/ionic4-datepicker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalVarService } from './Services/global-var.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
           HttpClientModule,HttpModule,NgbModule],
  providers: [
    StatusBar,
    GlobalVarService,
    SplashScreen,
   
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports:[NgbDatepickerModule,NgbDatepicker],
  bootstrap: [AppComponent]
})
export class AppModule {}
