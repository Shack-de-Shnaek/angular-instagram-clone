import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFeedComponent } from './img-feed.component';

describe('ImgFeedComponent', () => {
  let component: ImgFeedComponent;
  let fixture: ComponentFixture<ImgFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
