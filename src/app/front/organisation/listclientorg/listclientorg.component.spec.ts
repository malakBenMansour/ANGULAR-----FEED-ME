import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclientorgComponent } from './listclientorg.component';

describe('ListclientorgComponent', () => {
  let component: ListclientorgComponent;
  let fixture: ComponentFixture<ListclientorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListclientorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListclientorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
