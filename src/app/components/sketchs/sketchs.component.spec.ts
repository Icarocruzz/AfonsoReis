import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchsComponent } from './sketchs.component';

describe('SketchsComponent', () => {
  let component: SketchsComponent;
  let fixture: ComponentFixture<SketchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SketchsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SketchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
