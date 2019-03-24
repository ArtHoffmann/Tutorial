import { DataService } from './../../../../services/data-services/data.service';
import { Component, OnInit, ViewChild, OnChanges, Input, ChangeDetectorRef } from '@angular/core';
import { trigger, transition, style, stagger, animate, keyframes, query } from '@angular/animations';
import { MatTableDataSource, MatPaginator, MatPaginatorIntl } from '@angular/material';
import { UserModel } from 'src/app/models/user-model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('50ms', [
          animate('0.3s ease-in', keyframes([
            style({ opacity: 0 }),
            style({ opacity: .5 }),
            style({ opacity: 1 }),
          ]))]), { optional: true }),
        query(':leave', stagger('10ms', [
          animate('0.5s ease-in', keyframes([
            style({ opacity: 1 }),
            style({ opacity: .5 }),
            style({ opacity: 0 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class UserListComponent implements OnInit, OnChanges {

  @Input()
  data: UserModel[] = [];
  dataSource = new MatTableDataSource<UserModel>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['firstName', 'lastName'];

  constructor(private dataService: DataService, private changeDetectorRefs: ChangeDetectorRef) {
    this.dataService.getUsers().subscribe(x => this.data = x);
  }

  ngOnInit() {
    const pag = new MatPaginatorIntl();
    pag.itemsPerPageLabel = 'Elemente pro Seite';
    pag.firstPageLabel = 'Erste Seite';
    pag.lastPageLabel = 'Letzte Seite';
    pag.nextPageLabel = 'Nächste Seite';
    pag.previousPageLabel = 'Vorherige Seite';
    this.paginator._intl = pag;
    this.refresh();
  }

  ngOnChanges(): void {
    if (this.data !== null && this.data !== undefined) {
      this.dataService.getUsers().subscribe(x => this.data = x);
      this.dataSource = new MatTableDataSource<UserModel>(this.data);
      this.dataSource.paginator = this.paginator;
    }
  }


  refresh() {
    this.dataService.getUsers().subscribe(x => {
      this.dataSource.data = x;
    });
  }
}
