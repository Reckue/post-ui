import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {PopupNotificationComponent} from './components/popup-notification/popup-notification.component';
import {HttpClientModule} from '@angular/common/http';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { PostListComponent } from './components/post/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupNotificationComponent,
    PostDetailComponent,
    PostListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
