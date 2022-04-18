import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Photo } from '../interfaces';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.css']
})
export class NewPhotoComponent implements OnInit {
  ngOnInit() {
    // this.newPhoto.id = Math.round(Math.random() * 10000);
  }
  
  newPhoto = {
    albumId: 1,
    id: 0,
    title: '',
    thumbnailUrl: '',
    url: ''
  }

  @Output() upload = new EventEmitter<Photo>(false);

  submitPhoto() {
    if (this.newPhoto.title && this.newPhoto.url) {
      if (!this.newPhoto.thumbnailUrl) this.newPhoto.thumbnailUrl = this.newPhoto.url;
      fetch('http://jsonplaceholder.typicode.com/photos', {
      method: 'POST',
      body: JSON.stringify(this.newPhoto)
    })
      // .then(res => {
      //   console.log(res);
      //   alert('photo submitted');
      //   this.upload.emit(this.newPhoto);
      //   res.json();
      // })
      .then(raw => raw.json())
      .then(res => {
        console.log(res);
        alert('photo submitted');
        this.newPhoto.id = res.id;
        this.upload.emit(this.newPhoto);
      })
      .catch(err => {
        console.log(err);
        alert('could not submit the photo');
      });
    }
    else {
      alert('You need to at least provide a title and image url!');
    }
  }
}
