import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuAnService } from '../du-an.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { NhanVien } from '../nhan-vien';
import { NhanVienService } from '../nhan-vien.service';

@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {

  constructor(
    private daService:DuAnService,
    private nvService:NhanVienService,
    private router:Router,
    private activeRoute:ActivatedRoute,
  ) { }

  idDA:number = Number(this.activeRoute.snapshot.params['id']);
  da:DuAn = <DuAn>{};
  nv:NhanVien =<NhanVien>{}
  listNV:any;
  ngOnInit(): void {
    this.listNV = this.nvService.getNhanVien().subscribe(
      data => this.listNV= data
    );
  this.daService.getMotDuAn(this.idDA).subscribe((data) => {
    this.da = data as DuAn;
  });
   }
  // capnhatDA(){
  //   this.daService.capnhatDuAn(this.da);
  //   this.router.navigate(['/admin/duan']);
  // }
  // @Input() da:any;
  daSua(da:any){
    this.daService.capnhatDuAn(da).subscribe ( data => {
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['/admin/duan']);
    });
}
}
