import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {


  @Output() onSelectRoom = new EventEmitter<number>();
  allRooms = [];


  constructor(private myService: ApiService) { }

  ngOnInit() {
    this.myService.getRooms()
      .subscribe(data => this.allRooms = data);

  }

  show(id: number) {
    this.onSelectRoom.emit(id);

  }


}
