import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {
  idTask:number =Number(this.route.snapshot.params['id']);
  t = <Task>{};
  constructor(
    private route:ActivatedRoute,
    private taskService:TaskService,
  ) { }

  ngOnInit(): void {
    this.taskService.getMotTask(this.idTask).subscribe((data) => {
        this.t = data as Task;
      });


  }
}
