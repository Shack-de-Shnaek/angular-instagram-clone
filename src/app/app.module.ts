import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImgFeedComponent } from './img-feed/img-feed.component';
import { ImgComponent } from './img/img.component';
import { NewPhotoComponent } from './new-photo/new-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgFeedComponent,
    ImgComponent,
    NewPhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
