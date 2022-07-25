import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuAndetailComponent } from './du-andetail.component';

describe('DuAndetailComponent', () => {
  let component: DuAndetailComponent;
  let fixture: ComponentFixture<DuAndetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuAndetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuAndetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
