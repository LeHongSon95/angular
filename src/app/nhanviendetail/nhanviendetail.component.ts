import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NhanVienService } from '../nhan-vien.service';
import { NhanVien } from '../nhan-vien';

@Component({
  selector: 'app-nhanviendetail',
  templateUrl: './nhanviendetail.component.html',
  styleUrls: ['./nhanviendetail.component.css']
})
export class NhanviendetailComponent implements OnInit {
  idNV:number =Number(this.route.snapshot.params['id']);
  n = <NhanVien>{};
  constructor(
    private route:ActivatedRoute,
    private nvService:NhanVienService,
  ) { }

  ngOnInit(): void {
    this.nvService.getMotNhanVien(this.idNV).subscribe((data) => {
      this.n = data as NhanVien;
    });
  }

}
