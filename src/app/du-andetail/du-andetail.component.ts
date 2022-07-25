import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuAnService } from '../du-an.service';
import { DuAn } from '../du-an';

@Component({
  selector: 'app-du-andetail',
  templateUrl: './du-andetail.component.html',
  styleUrls: ['./du-andetail.component.css']
})
export class DuAndetailComponent implements OnInit {
  idDA:number =Number(this.route.snapshot.params['id']);
  da:any;
  constructor(
    private route:ActivatedRoute,
    private daService:DuAnService,
    ) { }

  ngOnInit(): void {
    this.daService.getMotDuAn(this.idDA).subscribe((data) => {
      this.da = data as DuAn;
    });
  }
}
