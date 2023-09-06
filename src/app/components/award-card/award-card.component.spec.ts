import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardCardComponent } from './award-card.component';

describe('AwardCardComponent', () => {
  let component: AwardCardComponent;
  let fixture: ComponentFixture<AwardCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AwardCardComponent]
    });
    fixture = TestBed.createComponent(AwardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
