import { Component, OnInit } from '@angular/core';

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

  posts = [];

  constructor() { }

  ngOnInit() {
  }

}
