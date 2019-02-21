import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';
import { FormsModule } from '@angular/forms';

const agoraConfig: AgoraConfig = {
  AppID: 'c11deb9092884e0eb24af7ce1e2f38c6',
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularAgoraRtcModule.forRoot(agoraConfig) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
