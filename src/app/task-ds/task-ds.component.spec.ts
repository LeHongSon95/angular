import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDsComponent } from './task-ds.component';

describe('TaskDsComponent', () => {
  let component: TaskDsComponent;
  let fixture: ComponentFixture<TaskDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
