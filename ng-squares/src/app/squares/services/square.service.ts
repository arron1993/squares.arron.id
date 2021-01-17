import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { SocketService } from 'src/app/core/services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class SquareService{

  constructor(private ss: SocketService) { 
    
  }

  updatePosition(roomId, squareId, x, y) {
    console.log("updatePosition")
    this.ss.emit("updatePosition", {roomId: roomId, squareId: squareId, x: x, y: y})
  }

  onUpdatedPosition(): Observable<any> {
    return this.ss.on("updatedPosition")
  }
}
