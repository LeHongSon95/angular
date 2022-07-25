import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanviendetailComponent } from './nhanviendetail.component';

describe('NhanviendetailComponent', () => {
  let component: NhanviendetailComponent;
  let fixture: ComponentFixture<NhanviendetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanviendetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanviendetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
