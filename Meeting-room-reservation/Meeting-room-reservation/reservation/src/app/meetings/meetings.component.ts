import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { RoomReservations } from '../room-reservations';
import {  ElementRef, ViewChild } from'@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  @ViewChild('f_time') f_time: ElementRef;
  @ViewChild('t_time') t_time: ElementRef;
  


  @Input() day;
  @Input() year;
  @Input() month;
  @Input() day_num;
  @Input() room;
  
  class:string[];
  className:string;
  from_time: string[];
  to_time:string[];
  date: string[];
  result=["","","",""];
  from_input:string;
  to_input:string;
  flag:boolean = false;
  index: number = 0;
  index2: number = 0;
  allReservs: RoomReservations[];
  x:string;
  y :number = 0;
  oldTime :string[];
  newTime :string[];

  constructor(private myService: ApiService) { }

  ngOnInit() {
    this.myService.getReservations()
      .subscribe(data => this.allReservs = data);
  }

  add() {
   this.flag = true;
  }

  reserve(f_time: HTMLInputElement , t_time: HTMLInputElement){
    this.from_input = f_time.value;
    this.to_input = t_time.value;

    for(this.index ; this.index<this.allReservs.length;this.index++){
      if(this.allReservs[this.index].room_id==this.room){
      for(this.index2; this.index2<this.allReservs[this.index].reservations.length;this.index2++){
        
          //alert("not available");
          this.x=this.allReservs[this.index].reservations[this.index2].from_time.toString();
          this.newTime = this.get_From_Time(this.from_input);
          this.oldTime = this.get_From_Time(this.x);
        
       
        if(this.oldTime.length == this.newTime.length){
          if(this.oldTime[0]==this.newTime[0]&&this.oldTime[1]==this.newTime[1]
            &&this.oldTime[2]==this.newTime[2]&&this.oldTime[3]==this.newTime[3]){
              alert("this room is not available in this time");
              
              this.flag= false;
              return;
            }

            else {
              alert("available");

              this.myService.postReservation({
                "res_id": 400,
                "from_time": "2018-09-30 10:00",
                "to_time": "2018-09-30 12:00",
                "by": "Mohannad",
                "title": "Finance Meeting"
               });
          
               this.flag= false;
              return;
            }
        }
      }
    }
      else{
        alert("available");
        this.myService.postReservation({
          "res_id": 400,
          "from_time": "2018-09-30 10:00",
          "to_time": "2018-09-30 12:00",
          "by": "Mohannad",
          "title": "Finance Meeting"
         });
        this.flag= false;
        return;
      }
    }

    
  }

  get_From_Time(full_time: string) {

    this.from_time = full_time.split(" ");
    this.date = this.from_time[0].split("-");
    this.result[0] = this.from_time[1];
    this.result[1] = this.date[2];
    this.result[2] = this.date[1];
    this.result[3] = this.date[0];

    this.class =this.result[0].split(":");
    this.className= "Div_"+this.class[0];
    return this.result;
  }
  get_To_Time(full_time: string) {

    this.to_time = full_time.split(" ");
    return this.to_time[1];
  }



}
