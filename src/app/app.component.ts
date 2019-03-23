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
  appId = 'theme2';
  title = 'Template';
  theme: string;
  show = false;
  showPersonContainer = false;
  private $timer = Subscription.EMPTY;
  today: number = Date.now();

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.$timer = timer(1000, 1000)
      .subscribe(() => {
        this.today = Date.now();
      });
  }
  switchTheme(appId: string): string {
    return this.appId = appId;
  }
  ngOnDestroy(): void {
    this.$timer.unsubscribe();
  }
  toggleDiv() {
    this.show = !this.show;
  }
  togglePersonDiv() {
    this.showPersonContainer = !this.showPersonContainer;
  }
}
