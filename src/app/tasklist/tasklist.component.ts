import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private taskService:TaskService,
    private _http:HttpClient
  ) {
  }
  listTask:any;

  ngOnInit(): void {
    this.listTask=this.taskService.getTask()
    this._http.get('http://localhost:3000/listTask').subscribe(data => {
       this.listTask=data;
             
     });
  }

}
