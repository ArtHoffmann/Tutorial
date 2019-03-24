import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private endPoint: string;

  constructor(private http: HttpClient) {
    this.endPoint = environment.apmServiceEndpoint + '/user';
  }

  private get JsonContentHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return headers;
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.endPoint}/all`);
  }
  createUser(firstName: string, lastName: string) {
    const values = {
      // tslint:disable-next-line:object-literal-key-quotes
      'firstName': firstName,
      // tslint:disable-next-line:object-literal-key-quotes
      'lastName': lastName
    };
    console.log('dataService ' + JSON.stringify(values));
    return this.http.post<any>(`${this.endPoint}/createUser`, values, {
      headers: this.JsonContentHeader
    });
  }
}
