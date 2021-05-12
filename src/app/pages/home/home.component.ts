import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import {Item} from 'src/app/models/item';
import {AppService} from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) {}
  public items: Item[];
  private itemSubscription:Subscription;
  ngOnInit(): void {
    //here method with $ sign repreents it returns Observable
    this.itemSubscription = this.appService.fetchMenu$().subscribe(
      (items: Item[]) => this.items = items,
      (err: any) => console.error(err)
    )
  }
  detailPage(id: number): void {
    this.router.navigateByUrl("/foodDetail/" + id)
  }
  ngOnDestroy():void{
    this.itemSubscription.unsubscribe();
  }
}
