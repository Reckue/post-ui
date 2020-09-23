import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {PopupNotificationComponent} from './components/popup/notification/popup-notification.component';
import {HttpClientModule} from '@angular/common/http';
import {PostDetailComponent} from './pages/posts/post-detail/post-detail.component';
import {PostListComponent} from './pages/posts/post-list/post-list.component';
import {PostLandingComponent} from './components/post/post-landing.component';
import {PopupMenuComponent} from './components/popup/menu/popup-menu.component';
import { PostEditComponent } from './pages/posts/post-edit/post-edit.component';
import {PopupModalComponent} from './components/popup/modal/popup-modal.component';
import {SimpleLoadingComponent} from './components/loading/simple/simple-loading.component';
import {SearchMenuComponent} from './components/search/menu/search-menu.component';
import {FilterInputComponent} from './components/search/input/filter/filter-input.component';
import { InputComponent } from './components/input/input.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { NodeComponent } from './components/nodes/node.component';
import {TextComponent} from './components/nodes/text/text.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupNotificationComponent,
    PostDetailComponent,
    PostListComponent,
    PostLandingComponent,
    PopupMenuComponent,
    PostEditComponent,
    TextComponent,
    PopupMenuComponent,
    PopupModalComponent,
    SimpleLoadingComponent,
    SearchMenuComponent,
    FilterInputComponent,
    InputComponent,
    RichTextEditorComponent,
    NodeComponent,
    FooterComponent
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
