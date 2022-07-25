import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { NhanVienService } from '../nhan-vien.service';
import { DuAnService } from '../du-an.service';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {

  constructor(
    private taskService:TaskService,
    private daService: DuAnService,
    private nvService:NhanVienService,
    private router:Router,
  ) { }
  listNV:any;
  t:Task = <Task>{};
  listDA:any;
  themT(t:any){
      // this.TaskService.themTask(this.t);

      this.taskService.themTask(t).subscribe(data => alert('Thêm thành công'));
      this.router.navigate(['/admin/task']);
  }
  ngOnInit(): void {
    this.listNV = this.nvService.getNhanVien().subscribe(
      data => this.listNV= data
    );
    this.listDA = this.daService.getDuAn().subscribe (
      data => this.listDA= data
    );
  }

}
