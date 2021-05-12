import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  constructor() {}
  @Input() rating = 2.75;
  starPercentageRounded = '';
  ratings = []
  ngOnInit(): void {
    const starTotal = 5;
    let starPercentage = (this.rating / starTotal) * 100;
    this.starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  }

}
