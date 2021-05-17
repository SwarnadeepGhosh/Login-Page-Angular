import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { CarService } from './services/car.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptListComponent } from './test/dept-list/dept-list.component';
import { DeptDetailComponent } from './test/dept-detail/dept-detail.component';
import { EmpComponent } from './test/emp/emp.component'
import { RegService } from './services/reg.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { SuccessComponent } from './login/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    RegComponent,
    PageNotFoundComponent,
    DeptListComponent,
    DeptDetailComponent,
    EmpComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CarService,
    RegService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
