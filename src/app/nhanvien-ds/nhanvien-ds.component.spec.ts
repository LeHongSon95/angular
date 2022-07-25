import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienDsComponent } from './nhanvien-ds.component';

describe('NhanvienDsComponent', () => {
  let component: NhanvienDsComponent;
  let fixture: ComponentFixture<NhanvienDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanvienDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
