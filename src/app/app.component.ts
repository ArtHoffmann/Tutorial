import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject, timer, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Agiles Prozessmanagement';

  private $timer = Subscription.EMPTY;
  today: number = Date.now();

  ngOnInit(): void {
    this.$timer = timer(1000, 1000)
    .subscribe(() => {
      this.today = Date.now();
    });
  }

  ngOnDestroy(): void {
    this.$timer.unsubscribe();
  }
}
