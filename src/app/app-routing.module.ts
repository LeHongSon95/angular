import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DuAndetailComponent } from './du-andetail/du-andetail.component';
import { DuAnlistComponent } from './du-anlist/du-anlist.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { DuanDsComponent } from './duan-ds/duan-ds.component';
 import { NhanviendetailComponent } from './nhanviendetail/nhanviendetail.component';
import { NhanvienlistComponent } from './nhanvienlist/nhanvienlist.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NhanvienDsComponent } from './nhanvien-ds/nhanvien-ds.component';
import { TasklistComponent } from './tasklist/tasklist.component';
 import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskDsComponent } from './task-ds/task-ds.component';



const routes: Routes = [
  { path: '',component:HomeComponent },
  { path: 'home',component:HomeComponent },
  { path: 'lienhe',component:LienheComponent },
  { path: 'dangnhap',component:DangnhapComponent },
  { path: 'duan',component: DuAnlistComponent },
  { path: 'duan/:id',component: DuAndetailComponent },
  { path: 'admin/duan',component:DuanDsComponent },
  { path: 'admin/themDA',component:DuanThemComponent },
  { path: 'admin/suaDA/:id',component:DuanSuaComponent },
  { path: 'nhanvien',component: NhanvienlistComponent },
  { path: 'nhanvien/:id',component: NhanviendetailComponent },
  { path: 'admin/nhanvien',component:NhanvienDsComponent },
  { path: 'admin/themNV',component:NvThemComponent },
  { path: 'admin/suaNV/:id',component:NvSuaComponent },
  { path: 'task',component: TasklistComponent },
  { path: 'task/:id',component: TaskdetailComponent },
  { path: 'admin/task',component:TaskDsComponent },
  { path: 'admin/themTask',component:TaskThemComponent },
  { path: 'admin/suaTask/:id',component:TaskSuaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
