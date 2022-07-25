import { Injectable } from '@angular/core';
import { DuAn } from './du-an';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DuAnService {

  constructor(private _http:HttpClient) { }
  // listDuAn:DuAn[]=[
  //   {id:1,tenDuAn: 'Quản lý trại heo',ngayStart:'2022-83-81',tien:67000000,leader:1,thanhvien:[1,3,4]},
  //   {id:2,tenDuAn:'Cây xanh công viên',ngayStart:'2022-84-92',tien:98500990,leader:1,thanhvien:[1,3,4]},
  //   {id:3,tenDuAn:'Website Văn hóa Việt',ngayStart:'2022-84-15',tien:35000000,leader:2,thanhvien:[2,4]},
  //   {id:4,tenDuAn:'Website Du lich Bui',ngayStart:'2022-04-21',tien:75500000,leader:2,thanhvien:[2,4]},
  //   {id:5,tenDuAn:'Quản lý nhà thuốc Vĩnh An',ngayStart:'2022-05-2',tien:97000000,leader:3,thanhvien:[3,4]},
  //   {id:6,tenDuAn:'Chăm sóc thú cưng',ngayStart:'2022-02-11',tien:18000990,leader:3,thanhvien:[3,4]},
  // ]
  chonSP ="ganSP($event)";
  getDuAn(){
    return this._http.get('http://localhost:3000/listDuAn');
  }
  getMotDuAn(id:any){
    return this._http.get('http://localhost:3000/listDuAn/'+ id);
  }
  themDuAn(da:any){
    return this._http.post('http://localhost:3000/listDuAn',da);
  }
  capnhatDuAn(da:any){
    return this._http.put('http://localhost:3000/listDuAn/' + da.id ,da);
  } 
  xoaDuAn(id:any){
    return this._http.delete('http://localhost:3000/listDuAn/'+ id);
   
  }
}
