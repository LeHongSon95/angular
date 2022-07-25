import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-task-ds',
  templateUrl: './task-ds.component.html',
  styleUrls: ['./task-ds.component.css']
})
export class TaskDsComponent implements OnInit {
  @Output() chonT = new EventEmitter();
  capnhatTask(t:any){
    console.log(t);    
    this.chonT.emit(t);
  }
  constructor(
    private taskService: TaskService,
  ) { }
  listTask:any;
  ngOnInit(): void {
    this.listTask = this.taskService.getTask().subscribe ( 
      data => this.listTask= data
    );
  }
  xoaTask(id:number=0){
    if (confirm('Xóa thật không')==true){
      this.taskService.xoaTask(id).subscribe(data => alert('Xóa thành công'))
    }

  }
}
