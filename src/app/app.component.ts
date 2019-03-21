import { UserModel } from './models/user-model';
import { DataService } from './services/data-services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject, timer, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Agiles Prozessmanagement';
  show = false;
  private $timer = Subscription.EMPTY;
  today: number = Date.now();
  users$: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>(null);

  constructor(private dataService: DataService) {
    this.dataService.getUsers().subscribe(x => this.users$.next(x));
  }

  ngOnInit(): void {
    this.$timer = timer(1000, 1000)
    .subscribe(() => {
      this.today = Date.now();
    });
  }

  ngOnDestroy(): void {
    this.$timer.unsubscribe();
  }
  toggleDiv() {
    this.show = !this.show;
  }
}
