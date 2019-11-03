import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { AddNewRoomDetailsComponent } from './add-new-room-details/add-new-room-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    RoomDetailsComponent,
    AddNewRoomDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
