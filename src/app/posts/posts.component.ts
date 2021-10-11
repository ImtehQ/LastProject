import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostthingyService } from '../postthingy.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  currentItem ='';
  posts : Post[] = [];

  constructor(private service : PostthingyService)
   { 
     
   }

  ngOnInit() : void
  {
    this.service.GetPosts().subscribe(x => this.posts = x.slice(0,1000));;
  }

  onClick(id : number)
  {

    //Posts is a array of Post, each Post has a body = a string
    this.currentItem = this.posts[id].body;
  }

}
