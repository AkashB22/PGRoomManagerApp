import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RoomServiceService } from '../room-service.service';
import { Room } from '../Models/Room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  constructor(public route : ActivatedRoute, public roomService : RoomServiceService, public router : Router) { }
  public buildingNo = +this.route.snapshot.paramMap.get("buildingNo");
  public roomNo = +this.route.snapshot.paramMap.get("roomNo");
  public room : Room;
  public errorMsg : String;
  public message : String;

  

  ngOnInit() {
    this.roomService.getParticularRoom(this.buildingNo, this.roomNo).subscribe(
      (data)=>{
        this.room = data;
        console.log('Room successfully fetched', data);
      },
      (error)=>{
        console.log('Error in fetching room' + error);
        this.errorMsg = error.message;
      }
    )
  }

  onSubmit(){
    this.roomService.updateRoom(this.room).subscribe(
      data=>{
        this.message = 'Updated successfully';
        console.log(data);
      },
      error=>{
        this.message = 'Error on updating';
        console.log(error);
      }
    )
  }

  onDelete(){
    this.roomService.deleteRoom(this.room.buildingNo, this.room.roomNo).subscribe(
      data=>{
        this.message = 'Deleted successfully';
        console.log(data);
        this.router.navigate(['/adminHome']);
      },
      error=>{
        this.message = 'Error deleting data';
        console.log(error)
      }
    )
  }

}
