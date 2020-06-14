import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {PostsComponent} from './posts/posts.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HeaderComponent} from './header/header.component';
import {PostAddComponent} from './posts/post-add/post-add.component';
import {PostEditComponent} from './posts/post-edit/post-edit.component';
import {PostDetailComponent} from './posts/post-detail/post-detail.component';
import {PostComponent} from './posts/post/post.component';
import {FormsModule} from "@angular/forms";
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent, children: [
      {path: ':id', component: PostDetailComponent},
      {path: '', component: PostListComponent},
      {path: 'add', component: PostAddComponent},
      {path: 'edit', component: PostEditComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    NotFoundComponent,
    HeaderComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
