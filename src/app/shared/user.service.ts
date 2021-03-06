import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserByUserName: any;

  //dependency injection
  constructor(private httpClient: HttpClient) { }

  getAllRoles(): Observable<Role[]> {
    console.log("inside getting role service");
    return this.httpClient.get<Role[]>(environment.apiUrl + "/api/roles");
  }

  //get all list
  getAllUsers(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/users");
  }

  //Insert
  insertUser(u: User): Observable<User> {
    return this.httpClient.post<User>(environment.apiUrl + "/api/users", u);
  }

  //Update
  updateUser(u: User): Observable<User> {
    return this.httpClient.put<User>(environment.apiUrl + "/api/users", u);
  }

  disableUser(user: User): Observable<User> {
    return this.httpClient.get<User>(environment.apiUrl + "/api/users/disable/" + user.userId);
  }

  enableUser(user: User): Observable<User> {
    return this.httpClient.get<User>(environment.apiUrl + "/api/users/enable/" + user.userId);
  }

}
