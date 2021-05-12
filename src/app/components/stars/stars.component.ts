import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  constructor() { }
  @Input() rating = 2.75;
  @Input() clickable = false;
  @Input() itemId;
  @Output() public starClick = new EventEmitter<number>();

  starPercentageRounded = '';
  ratings = []
  ngOnInit(): void {
    this.calculatePercentage();
  }
  ngOnChanges(x, y): void {
    //we can make it more efficient bt it works for now.
    this.calculatePercentage();
  }

  setStar(star: number): void {
    if (this.clickable) {
      this.rating = star;
    }

    this.calculatePercentage();

    this.starClick.emit(star);
  }
//calculate the star to be displayed in template
  calculatePercentage() {
    const starTotal = 5;
    let starPercentage = (this.rating / starTotal) * 100;
    this.starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  }

}
