import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { tittle: 'First Post', content: 'This is the first post' },
  //   { tittle: 'Second Post', content: 'This is the second post' },
  //   { tittle: 'Third Post', content: 'This is the third post' }
  // ];

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
