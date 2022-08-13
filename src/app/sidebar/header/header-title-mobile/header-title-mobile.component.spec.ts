import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTitleMobileComponent } from './header-title-mobile.component';

describe('HeaderTitleMobileComponent', () => {
  let component: HeaderTitleMobileComponent;
  let fixture: ComponentFixture<HeaderTitleMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTitleMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTitleMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
