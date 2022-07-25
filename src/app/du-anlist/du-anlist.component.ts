import { Component, OnInit } from '@angular/core';
import { DuAnService } from '../du-an.service';
import { DuAn } from '../du-an';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-du-anlist',
  templateUrl: './du-anlist.component.html',
  styleUrls: ['./du-anlist.component.css']
})
export class DuAnlistComponent implements OnInit {

  constructor(private daService:DuAnService,
    private _http:HttpClient
    ) {
  }
  listDuAn:any;
  // da: any;
  // ganDA(da: any) {
  //   this.da = da;
  //   console.log(this.da);
  // }
  ngOnInit(): void {
    this.listDuAn=this.daService.getDuAn()
    this._http.get('http://localhost:3000/listDuAn').subscribe(data => {
       this.listDuAn=data;
             
     });
  }

}
