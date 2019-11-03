import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { AddNewRoomDetailsComponent } from './add-new-room-details/add-new-room-details.component';


const routes: Routes = [
  { path: 'adminHome', component: AdminPanelComponent },
  { path: 'roomDetails/:buildingNo/:roomNo', component: RoomDetailsComponent },
  { path : 'addNewRoomDetails', component : AddNewRoomDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
