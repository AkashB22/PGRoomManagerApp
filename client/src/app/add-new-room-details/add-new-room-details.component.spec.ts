import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRoomDetailsComponent } from './add-new-room-details.component';

describe('AddNewRoomDetailsComponent', () => {
  let component: AddNewRoomDetailsComponent;
  let fixture: ComponentFixture<AddNewRoomDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewRoomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
