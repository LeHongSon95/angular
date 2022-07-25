import { Component, OnInit } from '@angular/core';
import { DuAnService } from '../du-an.service';
import { NhanVienService } from "../nhan-vien.service";
import { TaskService } from "../task.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private daService: DuAnService,
    private nvService: NhanVienService,
    private taskService: TaskService,) { }

    listDA:any;
    listNhanVien:any;
    listTask:any;
    ngOnInit(): void {
      this.listDA = this.daService.getDuAn().subscribe ( 
        data => this.listDA= data
      );
      this.listNhanVien = this.nvService.getNhanVien().subscribe ( 
        data => this.listNhanVien= data
      );
      this.listTask = this.taskService.getTask().subscribe ( 
        data => this.listTask= data
      );
    }

}
