import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypereclamationsComponent } from './typereclamations.component';

describe('TypereclamationsComponent', () => {
  let component: TypereclamationsComponent;
  let fixture: ComponentFixture<TypereclamationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypereclamationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypereclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
