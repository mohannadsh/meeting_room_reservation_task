import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoom } from './i-room';
import { RoomReservations } from './room-reservations';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    roomsURL: string = "http://demo3825547.mockable.io/meeting_rooms/";
    reservationURL: string = "http://demo3825547.mockable.io/get_meeting_rooms_reservations/";
    data: RoomReservations;
    current_item;
    index: number = 0;
    index2: number = 0;
    constructor(private httpClient: HttpClient) { }

    getRooms(): Observable<IRoom[]> {
        return this.httpClient.get<IRoom[]>(this.roomsURL);
    }

    getReservations(): Observable<RoomReservations[]> {
        return this.httpClient.get<RoomReservations[]>(this.reservationURL);
    }

    postReservation(newReserve: any) {

        return this.httpClient.post("http://demo3825547.mockable.io/create_reservation/", newReserve);
    }
}
