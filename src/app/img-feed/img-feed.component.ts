import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Photo } from '../interfaces';

@Component({
  selector: 'app-img-feed',
  templateUrl: './img-feed.component.html',
  styleUrls: ['./img-feed.component.css']
})
export class ImgFeedComponent implements OnInit {
  @Input() startingPhotoArr: Array<Photo> = [];
  photoArr: Array<Photo> = [];

  ngOnInit() {
    setTimeout(() => {
      this.photoArr = this.startingPhotoArr;
    }, 500);
  }
  
  imageClicked = false;
  
  checkClicked($event: any) {
    this.imageClicked = $event;
  }

  checkSubmitted($event: any) {
    this.photoArr.unshift($event);
  }

  checkDelete($event: any) {
    this.photoArr = this.photoArr.filter((photo) => {
      return $event !== photo.id;
    });
    this.imageClicked = false;
  }
}