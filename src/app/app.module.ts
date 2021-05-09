import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SidebarComponent } from './container/sidebar/sidebar.component';
import { HeaderComponent } from './container/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { UserAddComponent } from './components/user/user-add/user-add.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserShowComponent } from './components/user/user-show/user-show.component';

import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { PaymentAddComponent } from './components/payment/payment-add/payment-add.component';
import { PaymentShowComponent } from './components/payment/payment-show/payment-show.component';

import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectAddComponent } from './components/project/project-add/project-add.component';
import { ProjectShowComponent } from './components/project/project-show/project-show.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';
import { ProjectTeamBuildComponent } from './components/project/project-team-build/project-team-build.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    
    UserAddComponent,
    UserListComponent,
    UserEditComponent,
    UserShowComponent,
    
    PaymentListComponent,
    PaymentAddComponent,
    PaymentShowComponent,
    
    ProjectListComponent,
    ProjectAddComponent,
    ProjectShowComponent,
    ProjectEditComponent,
    ProjectTeamBuildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
