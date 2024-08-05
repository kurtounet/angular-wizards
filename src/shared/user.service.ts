import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IUser } from './users.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUser = environment.baseApiuser;
  http= inject(HttpClient);


  getAllUsers():Observable<IUser[]> {
    console.log(this.urlUser);
    return this.http.get<IUser[]>(this.urlUser);
  }
  getUserbyId(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.urlUser}/${id}`);
  }


}
