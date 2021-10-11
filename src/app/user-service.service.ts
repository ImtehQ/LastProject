import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Address } from './address';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})

export class UserServiceService {

  users : Observable<User[]>;

  

  constructor(private HttpClient : HttpClient){}

  public GetUsers():Observable<User[]>
  {
    this.users = this.HttpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return this.users;
  }
}
