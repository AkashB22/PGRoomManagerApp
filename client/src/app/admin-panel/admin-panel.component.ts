import { Component, OnInit } from '@angular/core';
import { Room } from '../Models/Room';
import { RoomServiceService } from '../room-service.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  public Rooms : Room[];
  public noOfBuildings = [1, 2, 3, 4, 5];
  constructor(public roomService : RoomServiceService) { }

  ngOnInit() {
    this.roomService.getAllRooms().subscribe(
      (data)=>{
        console.log(data);
        this.Rooms = data;
      },
      (error)=>{
        console.log('Error' + error);
      }
    )
  }
  
}
