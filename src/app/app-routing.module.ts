import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'test', component: TestComponent },
  { path: 'reg', component: RegComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
