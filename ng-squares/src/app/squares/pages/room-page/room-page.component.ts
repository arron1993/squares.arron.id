import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss']
})
export class RoomPageComponent implements OnInit {

  sub: Subscription
  constructor(
    private route: ActivatedRoute,
    private rs: RoomService) { }

  roomId: number;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.roomId = params.roomId;
      this.onJoinedRoom();
      this.rs.join(this.roomId);
    })
    
  }

  onJoinedRoom() {
    console.log("join room")
    this.sub = this.rs.onJoinedRoom().subscribe(resp => {
      console.log(resp);
    })
  }
}
