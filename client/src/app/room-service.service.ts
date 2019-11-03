import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from './Models/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  public Rooms : Room[];
  constructor(private http : HttpClient) { }
  private roomsUrl = 'http://localhost:3000/api/rooms/'
  private roomUrl = 'http://localhost:3000/api/room/'

  getAllRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(this.roomsUrl)
    .pipe(map((data)=>{
      return data.map(room => {
        return {
          userName : room.userName,
          roomNo : room.roomNo,
          buildingNo : room.buildingNo,
          PAN : room.PAN,
          aadhar : room.aadhar,
          address : room.address,
          lastModified : room.lastModified,
        }
      })
    }))
  };

  getParticularRoom(buildingNo, roomNo) : Observable<Room>{
    return this.http.get<Room>(`${this.roomUrl}${buildingNo}?roomNo=${roomNo}`)
      .pipe(map((room)=>{
        return {
          userName : room.userName,
          roomNo : room.roomNo,
          buildingNo : room.buildingNo,
          PAN : room.PAN,
          aadhar : room.aadhar,
          address : room.address,
          lastModified : room.lastModified,
        }
      }))
  }

  updateRoom(payload) : Observable<Room>{
    return this.http.put<Room>(`${this.roomsUrl}${payload.buildingNo}`, payload)
      .pipe(map((room)=>{
        return {
          userName : room.userName,
          roomNo : room.roomNo,
          buildingNo : room.buildingNo,
          PAN : room.PAN,
          aadhar : room.aadhar,
          address : room.address,
          lastModified : room.lastModified,
        }
      }));
  }

  deleteRoom(buildingNo, roomNo): Observable<Room>{
    return this.http.delete<Room>(`${this.roomsUrl}${buildingNo}?roomNo=${roomNo}`)
      .pipe(map((data)=>{
        return {
          userName : data.userName,
          buildingNo : data.buildingNo,
          roomNo : data.roomNo,
          PAN : data.PAN,
          aadhar : data.aadhar,
          address : data.address,
          lastModified : data.lastModified,
        }
      }))
  }

  addNewRoom(room): Observable<Room>{
    return this.http.post<Room>(`${this.roomsUrl}${room.buildingNo}`, room)
      .pipe(map((room)=>{
        return {
          userName : room.userName,
          buildingNo : room.buildingNo,
          roomNo : room.roomNo,
          PAN : room.PAN,
          aadhar : room.aadhar,
          address : room.address,
          lastModified : room.lastModified,
        }
      }))
  }
}
