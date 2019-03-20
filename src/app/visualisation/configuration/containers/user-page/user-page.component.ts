import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-services/data.service';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  users$: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>(null);

  constructor(private dataService: DataService) {
    this.dataService.getUsers().subscribe(x => this.users$.next(x));
  }

  ngOnInit() {
  }

}
