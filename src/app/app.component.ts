import { Component, OnInit } from '@angular/core';
import { Photo } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // photos: Array<Photo> = [];
  
  // ngOnInit(): void {
  //   fetch('http://jsonplaceholder.typicode.com/photos')
  //     .then(raw => raw.json())
  //     .then(res => {
  //       this.photos = res.slice(0, 50);
  //     })
  //     .catch(err => {
  //       alert(err);
  //     });
  // }
  raw: any = '';
  photos: Array<Photo> = [];

  async ngOnInit(): Promise<void> {
    this.raw = await fetch('http://jsonplaceholder.typicode.com/photos');
    this.photos = await this.raw.json();
  }
}
