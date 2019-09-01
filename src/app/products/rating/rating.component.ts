import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


  // for storing the rating values
  ratingArr: any = [];

  // from parent to child
  @Input() rating: any;

  // from child to parent
  @Output() ratingEvent: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {

    // this will take the rating no and assign size to that array and fill the array with that size
    this.ratingArr = Array(Math.round(this.rating)).fill(Math.round(this.rating));
  }


  sendData() {
  this.ratingEvent.emit("Rating is "+this.rating);
  }
}
