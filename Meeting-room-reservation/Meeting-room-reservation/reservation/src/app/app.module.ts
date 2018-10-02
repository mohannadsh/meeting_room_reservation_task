import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CalenderComponent } from './calender/calender.component';
import {HttpClientModule} from'@angular/common/http';
import {ApiService} from "./api.service";


@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    RoomsComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
