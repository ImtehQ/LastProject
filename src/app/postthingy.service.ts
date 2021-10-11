import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostthingyService {

  posts: Observable<Post[]>;
  postsArray : Post[] = [];

 // getthingy(): Post[] 
  //{
   // this.GetPosts().subscribe(x => this.postsArray = x.slice(0,1000));
  //  return this.postsArray;
  //}

  constructor(private HttpClient : HttpClient){}

  public GetPosts():Observable<Post[]>
  {
    this.posts = this.HttpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return this.posts;
  }

}
