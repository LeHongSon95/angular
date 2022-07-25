import { Component, OnInit } from '@angular/core';
import { NhanVienService } from '../nhan-vien.service';
import { NhanVien } from '../nhan-vien';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-nhanvienlist',
  templateUrl: './nhanvienlist.component.html',
  styleUrls: ['./nhanvienlist.component.css']
})
export class NhanvienlistComponent implements OnInit {

  constructor(private NVService:NhanVienService,
    private _http:HttpClient
    ) {
  }
  listNV:any;

  ngOnInit(): void {
    this.listNV=this.NVService.getNhanVien()
    this._http.get('http://localhost:3000/listNhanVien').subscribe(data => {
      this.listNV=data;
            
    });
  }
}

