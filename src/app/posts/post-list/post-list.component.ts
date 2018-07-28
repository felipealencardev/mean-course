import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   { tittle: 'First Post', content: 'This is the first post' },
  //   { tittle: 'Second Post', content: 'This is the second post' },
  //   { tittle: 'Third Post', content: 'This is the third post' }
  // ];

  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit() {
  }

}
