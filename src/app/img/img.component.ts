import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../interfaces';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent  {
  @Input() photo: Photo = {
    albumId: 0,
    id: 0,
    title: '',
    thumbnailUrl: '',
    url: ''
  }
  
  inputThumbnailUrl = '';
  inputUrl = '';
  inputTitle = '';

  saveUpdate() {
    fetch(`http://jsonplaceholder.typicode.com/photos/${this.photo.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        "albumId": this.photo.albumId,
        "id": this.photo.id,
        "title": (this.inputTitle) ? this.inputTitle : this.photo.title,
        "thumbnailUrl": (this.inputThumbnailUrl) ? this.inputThumbnailUrl : this.photo.thumbnailUrl,
        "url": (this.inputUrl) ? this.inputUrl : this.photo.url
      })
    })
      .then(res => {
        if (this.inputThumbnailUrl) this.photo.thumbnailUrl = this.inputThumbnailUrl;
        if (this.inputUrl) this.photo.url = this.inputUrl;
        if (this.inputTitle) this.photo.title = this.inputTitle;

        this.inputThumbnailUrl = '';
        this.inputUrl = '';
        this.inputTitle = '';

        console.log(res);
      })
      .catch(err => {
        console.log(err);
        alert('could not update the photo');
      });
  }

  @Output() delete = new EventEmitter<number>(false);
  deleteImage() {
    if (confirm('Are you sure you want to delete this image?')) {
      fetch(`http://jsonplaceholder.typicode.com/photos/${this.photo.id}`, {
        method: "DELETE"
      })
        .then(res => {
          console.log(res);
          this.delete.emit(this.photo.id);
        })
        .catch(err => {
          alert('could not delete the photo');
          console.log(err);
        });
    }
  }
  
  clicked = false;

  toggleClick() {
    this.clicked = !this.clicked;
    this.toggle();
  }

  @Output() imageIsClicked = new EventEmitter<boolean>(false);
  toggle() {
    this.imageIsClicked.emit(this.clicked);
  }
}
