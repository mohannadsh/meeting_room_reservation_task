# Meeting Room Reservation System Task

Please follow the following instruction to implement the Reservation System

1. Please use Angular 5 as SPA framework, SASS as stylesheet preprocessor.
1. Your code should be submitted as a pull request to this repository.

## System Requirements
The main goal of the system is to show you the reservations of the current meeting rooms in the company, and allow you to reserve a room for your meeting, The system should have the following features:

  - Display the current reservations of the meeting rooms.
  - Reserve a meeting room in the available time slot, and reject the reservation if the room is not available.
  - Suggest empty time slots for the user.
  - The UI should be responsive (using Bootstrap4)

## UI
Please use the following as the design for the system

![ui](https://image.ibb.co/etAXbp/reservation.png)

For Mobile, use the same design theme but make it usable on the mobile device


## APIs
- Get Meeting Rooms API: [GET] http://demo3825547.mockable.io/meeting_rooms/

Sample Response:
```
[
    {"title": "Queenbee", "id": 1},
    {"title": "Huddle", "id": 2},
    {"title": "Berberries", "id": 3},
    {"title": "Kena", "id": 4},
]
```

- Create A Reservation API: [POST] http://demo3825547.mockable.io/create_reservation/

Sample Response:
```
{
 "res_id": 400,
 "from_time": "2018-09-30 10:00"
 "to_time": "2018-09-30 12:00",
 "by": "Mohannad",
 "title": "Finance Meeting"
}
```

Please note that this API returns the same reservation instance each time, you might need to mock the server response in order to fit your needs.

- Get Meeting Room Reservation: [GET]
