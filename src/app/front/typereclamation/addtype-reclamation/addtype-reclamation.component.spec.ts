import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtypeReclamationComponent } from './addtype-reclamation.component';

describe('AddtypeReclamationComponent', () => {
  let component: AddtypeReclamationComponent;
  let fixture: ComponentFixture<AddtypeReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtypeReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtypeReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
