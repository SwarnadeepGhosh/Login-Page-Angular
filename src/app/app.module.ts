import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { CarService } from './car.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptListComponent } from './test/dept-list/dept-list.component';
import { DeptDetailComponent } from './test/dept-detail/dept-detail.component';
import { EmpComponent } from './test/emp/emp.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    RegComponent,
    PageNotFoundComponent,
    DeptListComponent,
    DeptDetailComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
