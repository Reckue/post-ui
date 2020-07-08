import {Routes} from '@angular/router';
import {HomeComponent} from './app/pages/home/home.component';
import {PostsComponent} from './app/pages/posts/posts.component';
import {PostListComponent} from './app/pages/posts/post-list/post-list.component';
import {PostAddComponent} from './app/pages/posts/post-add/post-add.component';
import {PostEditComponent} from './app/pages/posts/post-edit/post-edit.component';
import {PostDetailComponent} from './app/pages/posts/post-detail/post-detail.component';
import {NotFoundComponent} from './app/pages/not-found/not-found.component';
import {AuthComponent} from './app/pages/auth/auth.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'posts', component: PostsComponent, children: [
      {path: '', component: PostListComponent},
      {path: 'add', component: PostAddComponent},
      {path: 'edit/:id', component: PostEditComponent},
      {path: ':id', component: PostDetailComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
];
