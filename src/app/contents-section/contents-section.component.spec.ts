import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsSectionComponent } from './contents-section.component';

describe('ContentsSectionComponent', () => {
  let component: ContentsSectionComponent;
  let fixture: ComponentFixture<ContentsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
