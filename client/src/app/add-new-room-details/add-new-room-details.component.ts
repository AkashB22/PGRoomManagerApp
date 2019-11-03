import { Component, OnInit } from '@angular/core';
import { Room } from '../Models/Room';
import { NewRoom } from '../Models/NewRoom';
import { RoomServiceService } from '../room-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-room-details',
  templateUrl: './add-new-room-details.component.html',
  styleUrls: ['./add-new-room-details.component.css']
})
export class AddNewRoomDetailsComponent implements OnInit {
  public room = new NewRoom('', null, null, '', null , '');
  public message : String;

  constructor(public roomService : RoomServiceService, public router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.room);
    this.roomService.addNewRoom(this.room).subscribe(
      data=>{
        this.message = "Data added succesfully";
        console.log(data);
        this.router.navigate(['/adminHome']);
      },
      error=>{
        this.message = "Problem in adding new room data";
        console.log(error);
      }
    )
  }
}
