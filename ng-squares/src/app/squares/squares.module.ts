import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoomPageComponent } from './pages/create-room-page/create-room-page.component';
import { RoomPageComponent } from './pages/room-page/room-page.component';
import { SquaresBoardComponent } from './components/squares-board/squares-board.component';

@NgModule({
  declarations: [CreateRoomPageComponent, RoomPageComponent, SquaresBoardComponent],
  imports: [
    CommonModule
  ]
})
export class SquaresModule { }
