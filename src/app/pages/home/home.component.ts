import {Component, OnInit} from '@angular/core';
import {Item} from 'src/app/models/item';
import {AppService} from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService) {}
  public items: Item[];
  ngOnInit(): void {
    this.appService.fetchMenu().subscribe(
      (items: Item[]) => this.items = items,
      (err: any) => console.error(err)
    )
  }

}
