import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SquareService } from '../../services/square.service';

@Component({
  selector: 'app-squares-board',
  templateUrl: './squares-board.component.html',
  styleUrls: ['./squares-board.component.scss']
})
export class SquaresBoardComponent implements OnInit {
  @Input() roomId: number;

  constructor(private sqs: SquareService) { }
  squareId;

  positionSubscription: Subscription;

  ngOnInit(): void {
    this.squareId = Math.floor(Math.random() * Math.floor(100000000));

    window.addEventListener("mousemove", (e) => {
      this.sqs.updatePosition(this.roomId, this.squareId, e.pageX, e.pageY);
    });

    this.onUpdatedPosition();
  }

  onUpdatedPosition() {
    this.positionSubscription = this.sqs.onUpdatedPosition().subscribe(position => {
      let square = document.getElementById(position.squareId);
      if (!square) {
        square = document.createElement("div");
        square.id = position.squareId;
        square.classList.add("square");
        square.style.height = "10px";
        square.style.width = "10px";
        square.style.backgroundColor = "black";
        square.style.position = "absolute";
        square.style.top = `${position.y}px`;
        square.style.left = `${position.x}px`;
        document.querySelector(".square-board").appendChild(square);
      } else {
        square.style.top = `${position.y}px`;
        square.style.left = `${position.x}px`;
      }
      console.log(position.x, position.y);
    });      
  }
}
