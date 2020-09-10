import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDetailComponent} from './pages/post-detail/post-detail.component';
import {PostListComponent} from './pages/post-list/post-list.component';
import {PostEditComponent} from './pages/post-edit/post-edit.component';


const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'post/edit', component: PostEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
