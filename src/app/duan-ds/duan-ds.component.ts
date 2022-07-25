import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuAnService } from '../du-an.service';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duan-ds',
  templateUrl: './duan-ds.component.html',
  styleUrls: ['./duan-ds.component.css']
})
export class DuanDsComponent implements OnInit {
//   @Output() chonDA = new EventEmitter();
// suaDA(da:any){
//   console.log(da);    
//   this.chonDA.emit(da);
// }

  constructor(
    private daService: DuAnService,
    private _http:HttpClient
  ) { }
  listDA:any;
  ngOnInit(): void {
    this.listDA = this.daService.getDuAn().subscribe ( 
      data => this.listDA= data
    );
  }
  
  xoaDuan(id:number=0){
    if (confirm('Xóa thật không')==true){
      this.daService.xoaDuAn(id).subscribe(data => alert('Xóa thành công'))
    }

  }

}
