import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientListEditComponent } from './patient-list-edit/patient-list-edit.component';

const routes: Routes = [
{
path:'',
redirectTo:'patient-list',
pathMatch:'full'
},
  {
    path:'patient-list',
    component: PatientListComponent
  },
  {
    path:'patient-list-edit/:id',
    component: PatientListEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
