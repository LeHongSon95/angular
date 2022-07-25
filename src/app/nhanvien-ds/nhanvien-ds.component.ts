import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { NhanVienService } from '../nhan-vien.service';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nhanvien-ds',
  templateUrl: './nhanvien-ds.component.html',
  styleUrls: ['./nhanvien-ds.component.css']
})
export class NhanvienDsComponent implements OnInit {
  @Output() chonNV = new EventEmitter();
  capnhatNV(n:any){
    console.log(n);    
    this.chonNV.emit(n);
  }
  
  constructor(
    private nvService: NhanVienService,
    private _http:HttpClient
  ) { }
  listNV:any;
  ngOnInit(): void {
    this.listNV = this.nvService.getNhanVien().subscribe(
      data => this.listNV= data
    );
  }
  xoaNV(id:number=0){
    if (confirm('Xóa thật không')==true){
      this.nvService.xoaNhanVien(id).subscribe(data => alert('Xóa thành công'))
    }

  }

}
