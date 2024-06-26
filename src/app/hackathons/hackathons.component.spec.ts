import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonsComponent } from './hackathons.component';

describe('HackathonsComponent', () => {
  let component: HackathonsComponent;
  let fixture: ComponentFixture<HackathonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackathonsComponent]
    });
    fixture = TestBed.createComponent(HackathonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
