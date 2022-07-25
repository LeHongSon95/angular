import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DuAnlistComponent } from './du-anlist/du-anlist.component';
import { DuAndetailComponent } from './du-andetail/du-andetail.component';
import { NhanvienlistComponent } from './nhanvienlist/nhanvienlist.component';
 import { NhanviendetailComponent } from './nhanviendetail/nhanviendetail.component';
import { TasklistComponent } from './tasklist/tasklist.component';
 import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { TaskThemComponent } from './task-them/task-them.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { NvThemComponent } from './nv-them/nv-them.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { DuanDsComponent } from './duan-ds/duan-ds.component';
import { NhanvienDsComponent } from './nhanvien-ds/nhanvien-ds.component';
import { TaskDsComponent } from './task-ds/task-ds.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LienheComponent,
    DangnhapComponent,
    DuAnlistComponent,
     DuAndetailComponent,
    NhanvienlistComponent,
     NhanviendetailComponent,
    TasklistComponent,
     TaskdetailComponent,
    DuanSuaComponent,
    DuanThemComponent,
    TaskThemComponent,
    TaskSuaComponent,
    NvThemComponent,
    NvSuaComponent,
    DuanDsComponent,
    NhanvienDsComponent,
    TaskDsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
