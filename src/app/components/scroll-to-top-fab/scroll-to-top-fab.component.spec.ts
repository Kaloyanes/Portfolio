import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToTopFabComponent } from './scroll-to-top-fab.component';

describe('ScrollToTopFabComponent', () => {
  let component: ScrollToTopFabComponent;
  let fixture: ComponentFixture<ScrollToTopFabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollToTopFabComponent]
    });
    fixture = TestBed.createComponent(ScrollToTopFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
