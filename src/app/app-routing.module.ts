import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostDetailComponent} from './components/post/post-detail/post-detail.component';
import {PostListComponent} from './components/post/post-list/post-list.component';


const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'posts/:id', component: PostDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
