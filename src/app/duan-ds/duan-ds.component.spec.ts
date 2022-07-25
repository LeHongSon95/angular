import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanDsComponent } from './duan-ds.component';

describe('DuanDsComponent', () => {
  let component: DuanDsComponent;
  let fixture: ComponentFixture<DuanDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuanDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuanDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
