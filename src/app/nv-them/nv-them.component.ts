import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NhanVien } from '../nhan-vien';
import { NhanVienService } from '../nhan-vien.service';


@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent implements OnInit {

  constructor(
    private nvService:NhanVienService,
    private router:Router,
  ) { }
  n:NhanVien = <NhanVien>{};
  themNV(n:NhanVien){
      // this.nvService.themNhanVien(this.n);
      // this.router.navigate(['/admin/nhanvien']);
      this.nvService.themNhanVien(n).subscribe(data => alert('Thêm thành công'));
      this.router.navigate(['/admin/nhanvien']);
  }
    ngOnInit(): void {
  }
}

