import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDetailComponent} from './pages/posts/post-detail/post-detail.component';
import {PostListComponent} from './pages/posts/post-list/post-list.component';
import {PostEditComponent} from './pages/posts/post-edit/post-edit.component';


const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: ':id', component: PostDetailComponent,
    children: [{path: 'edit', component: PostEditComponent}]
  },
  {path: 'new-post', component: PostEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
