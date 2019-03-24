import { Component, OnInit, Output, OnChanges, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data-services/data.service';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/app/models/user-model';
import { MatTabChangeEvent } from '@angular/material';
import { UserListComponent } from '../../components/user-list/user-list.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  @ViewChild(UserListComponent) private listComponent: UserListComponent;
  users$: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>(null);

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getUsers().subscribe(list => {
      this.users$.next(list);
      console.log('userpage' + JSON.stringify(list));
    });
  }
  onTabChanged(event: MatTabChangeEvent) {
    if (event.index === 0) {
      this.listComponent.refresh();
    }
  }
}
