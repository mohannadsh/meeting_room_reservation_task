import { Component } from '@angular/core';
import { CalendarDate } from './calender/calender.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selected_day: string;
  day_num:number;
  selected_year:number;
  selected_month:number;
  selected_room: number;

  month:string;
  constructor() {

  }
  myFun(myDate: CalendarDate) {
    
    this.day_num =myDate.mDate.date();
    
    this.selected_month= myDate.mDate.month()+1;

    if(this.selected_month==1){
      this.month="01";
    }
    else if(this.selected_month==2){
      this.month="02";
    }
    else if(this.selected_month==3){
      this.month="03";
    }
    else if(this.selected_month==4){
      this.month="04";
    }
    else if(this.selected_month==5){
      this.month="05";
    }
    else if(this.selected_month==6){
      this.month="06";
    }
    else if(this.selected_month==7){
      this.month="07";
    }
    else if(this.selected_month==8){
      this.month="08";
    }
    else if(this.selected_month==9){
      this.month="09";
    }
    else {
      this.month = this.selected_month.toString();
    }


    this.selected_year =myDate.mDate.year();
    
    if (myDate.mDate.weekday() == 0) {
      this.selected_day = "Sunday";
    }
    else if (myDate.mDate.weekday() == 1) {
      this.selected_day = "Monday";
    }
    else if (myDate.mDate.weekday() == 2) {
      this.selected_day = "Tuesday";
    }
    else if (myDate.mDate.weekday() == 3) {
      this.selected_day = "Wednesday";
    }
    else if (myDate.mDate.weekday() == 4) {
      this.selected_day = "Thursday";
    }
    else if (myDate.mDate.weekday() == 5) {
      this.selected_day = "Friday";
    }
    else {
      this.selected_day = "Saturday";
    }

  }

  showEvents(room_id) {
    this.selected_room = room_id;
  }

}
