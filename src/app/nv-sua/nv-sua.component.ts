import { Component, OnInit } from '@angular/core';
import { NhanVienService } from '../nhan-vien.service';
import { NhanVien } from '../nhan-vien';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit {

  constructor( 
    private nvService:NhanVienService,
    private router:Router,
    private activeRoute:ActivatedRoute,
  ) { }
  idNV:number = Number(this.activeRoute.snapshot.params['id']);
  n:NhanVien = <NhanVien>{}

  ngOnInit(): void {
    // let  kq  = this.nvService.getMotNhanVien(this.idNV);
    // this.n = kq as NhanVien;
    this.nvService.getMotNhanVien(this.idNV).subscribe((data) => {
      this.n = data as NhanVien;
    });
  }
  nvSua(n:any){
    this.nvService.capnhatNhanVien(n).subscribe(data=>{
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['/admin/nhanvien']);
    
    });
   
  }

}
