import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShortComponent } from './about-short.component';

describe('AboutShortComponent', () => {
  let component: AboutShortComponent;
  let fixture: ComponentFixture<AboutShortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutShortComponent]
    });
    fixture = TestBed.createComponent(AboutShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
