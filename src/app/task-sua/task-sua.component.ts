import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { NhanVienService } from '../nhan-vien.service';
import { DuAnService } from '../du-an.service';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {

  constructor(
    private taskService:TaskService,
    private router:Router,
    private daService: DuAnService,
    private nvService:NhanVienService,
    private activeRoute:ActivatedRoute,
  ) { }

  idTask:number = Number(this.activeRoute.snapshot.params['id']);
  t:Task = <Task>{}
  listDA:any;
  listNV:any;
  ngOnInit(): void {
    // let  kq  = this.TaskService.getMotTask(this.idTask);
    // this.t = kq as Task;
    this.taskService.getMotTask(this.idTask).subscribe((data) => {
      this.t = data as Task;
    });
    this.listNV = this.nvService.getNhanVien().subscribe(
      data => this.listNV= data
    );
    this.listDA = this.daService.getDuAn().subscribe (
      data => this.listDA= data
    );
  }
  taskSua(t:any){
    this.taskService.capnhatTask(t).subscribe ( data => {
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['/admin/task']);
    });
}
}
