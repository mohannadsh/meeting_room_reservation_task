export interface RoomReservations {
    room_id: number;
    reservations: {
        res_id: number, from_time: Date, to_time: Date, by: string, title: string
    }[];

}
