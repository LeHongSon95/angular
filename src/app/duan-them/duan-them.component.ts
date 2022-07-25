import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuAn } from '../du-an';
import { DuAnService } from '../du-an.service';
import { NhanVien } from '../nhan-vien';
import { NhanVienService } from '../nhan-vien.service';

@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {

  constructor(
    private daService:DuAnService,
    private nvService:NhanVienService,
    private router:Router,
  ) { }
  da:DuAn = <DuAn>{}
  nv:NhanVien =<NhanVien>{}
  listNV:any;
  ngOnInit(): void {
    this.listNV = this.nvService.getNhanVien().subscribe(
      data => this.listNV= data
    );
  }
  themDA(da:DuAn){
    this.daService.themDuAn(da).subscribe(data => alert('Thêm thành công'));
      this.router.navigate(['/admin/duan']);
  }

}
