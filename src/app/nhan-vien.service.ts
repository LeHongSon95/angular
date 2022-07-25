import { Injectable } from '@angular/core';
import { NhanVien } from './nhan-vien';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NhanVienService {

  constructor(private _http:HttpClient) { }
  // listNhanVien:NhanVien[]=[
  //   {id:1,ho:'Nguyễn Bá',ten:'Đạo',ngaysinh:'2001-1-3',phai:true,khuvuc:'Bắc'},
  //   {id:1,ho:'Phạm Kỷ',ten:'Luật',ngaysinh:'2001-5-6',phai:true,khuvuc:'Bắc'},
  //   {id:1,ho:'Mai Thanh',ten:'Toán',ngaysinh:'2002-6-15',phai:true,khuvuc:'Nam'},
  //   {id:1,ho:'Cao Thị Chốt',ten:'Vót',ngaysinh:'2992-8-19',phai:false,khuvuc:'Nam'},
  //   {id:1,ho:'Mai Phạt Sầu',ten:'Ngàn',ngaysinh:'2991-2-28',phai:false,khuvuc:'Trung'},
  // ]
  getNhanVien(){
    return this._http.get('http://localhost:3000/listNhanVien');
  }
  getMotNhanVien(id:any){
    return this._http.get('http://localhost:3000/listNhanVien/'+ id);
  }
  themNhanVien(n:any){
    return this._http.post('http://localhost:3000/listNhanVien', n);
  }
  capnhatNhanVien(n:any){
    return this._http.put('http://localhost:3000/listNhanVien/' + n.id ,n)
  } 
  xoaNhanVien(n:any){
    return this._http.delete('http://localhost:3000/listNhanVien/'+ n);
  }
}
