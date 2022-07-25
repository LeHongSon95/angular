import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuAnlistComponent } from './du-anlist.component';

describe('DuAnlistComponent', () => {
  let component: DuAnlistComponent;
  let fixture: ComponentFixture<DuAnlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuAnlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuAnlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
