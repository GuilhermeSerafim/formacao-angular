import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneControlFormComponent } from './standalone-control-form.component';

describe('StandaloneControlFormComponent', () => {
  let component: StandaloneControlFormComponent;
  let fixture: ComponentFixture<StandaloneControlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandaloneControlFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneControlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
