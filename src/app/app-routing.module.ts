import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDetailComponent} from './pages/posts/post-detail/post-detail.component';
import {PostListComponent} from './pages/posts/post-list/post-list.component';
import {PostEditComponent} from './pages/posts/post-edit/post-edit.component';
import {PostsComponent} from './pages/posts/posts.component';
import {RichTextEditorComponent} from './rich-text-editor/rich-text-editor.component';


const routes: Routes = [
  {path: 'posts', component: PostsComponent, children: [
      {path: '', component: PostListComponent},
      {path: ':id', component: PostDetailComponent},
      {path: 'edit/:id', component: PostEditComponent},
    ]
  },
  {path: 'txt', component: RichTextEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
