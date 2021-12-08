import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KaryawanComponent } from './karyawan.component';

const routes: Routes = [{ path: '', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaryawanRoutingModule { }