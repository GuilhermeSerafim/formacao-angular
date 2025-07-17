import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTemplateContentComponent } from './card-template-content.component';

describe('CardTemplateContentComponent', () => {
  let component: CardTemplateContentComponent;
  let fixture: ComponentFixture<CardTemplateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTemplateContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTemplateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
