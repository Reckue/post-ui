import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';

import {routes} from '../routes';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {PostsComponent} from './pages/posts/posts.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HeaderComponent} from './components/header/header.component';
import {PostAddComponent} from './pages/posts/post-add/post-add.component';
import {PostEditComponent} from './pages/posts/post-edit/post-edit.component';
import {PostDetailComponent} from './pages/posts/post-detail/post-detail.component';
import {PostComponent} from './components/post/post.component';
import {FormsModule} from '@angular/forms';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { TextComponent } from './components/nodes/text/text.component';
import { ImageComponent } from './components/nodes/image/image.component';
import { VideoComponent } from './components/nodes/video/video.component';
import { CodeComponent } from './components/nodes/code/code.component';
import {NodeComponent} from './components/nodes/node.component';
import {TypeSelectorComponent} from './components/selector/type-selector.component';
import {PopupNotificationComponent} from './components/notification/popup/popup-notification.component';
import {InputComponent} from './components/input/input.component';
import {AuthComponent} from './pages/auth/auth.component';
import {StoreModule} from '@ngrx/store';
import {headerReducer} from './redux/reducers/HeaderReducer';
import {authReducer} from './redux/reducers/AuthReducer';
import {UserImageComponent} from './components/image/user-image.component';
import {LikeComponent} from './components/like/like.component';

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
    PostListComponent,
    TextComponent,
    ImageComponent,
    VideoComponent,
    CodeComponent,
    NodeComponent,
    TypeSelectorComponent,
    PopupNotificationComponent,
    InputComponent,
    AuthComponent,
    UserImageComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    StoreModule.forRoot({header: headerReducer, auth: authReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
