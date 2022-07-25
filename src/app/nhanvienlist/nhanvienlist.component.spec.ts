import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienlistComponent } from './nhanvienlist.component';

describe('NhanvienlistComponent', () => {
  let component: NhanvienlistComponent;
  let fixture: ComponentFixture<NhanvienlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhanvienlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
