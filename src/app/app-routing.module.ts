import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegComponent } from './reg/reg.component';
import { DeptDetailComponent } from './test/dept-detail/dept-detail.component';
import { DeptListComponent } from './test/dept-list/dept-list.component';
import { EmpComponent } from './test/emp/emp.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegComponent },
  { path: 'test', component: TestComponent },
  { path: 'test/departments', component: DeptListComponent },
  //added a route with placeholder id parameter, which will be change according to click
  { path: 'test/departments/:id', component: DeptDetailComponent },
  { path: 'test/employees', component: EmpComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
