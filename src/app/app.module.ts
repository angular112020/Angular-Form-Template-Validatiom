import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EmployeeRegistrationComponent } from './components/pages/employee-registration/employee-registration.component';
import { OrderMenuComponent } from './components/pages/order-menu/order-menu.component'
import {FormsModule} from '@angular/forms';
import { ConfirmpasswordDirective } from './tools/utils/confirmpassword.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeRegistrationComponent,
    OrderMenuComponent,
    ConfirmpasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
