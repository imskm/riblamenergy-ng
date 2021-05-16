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
import { ProjectTeamComponent } from './components/project/project-team/project-team.component';
import { UsersIndexComponent } from './components/user/users-index/users-index.component';
import { ProjectIndexComponent } from './components/project/project-index/project-index.component';
import { PaymentIndexComponent } from './components/payment/payment-index/payment-index.component';
import { UserSingleComponent } from './components/user/user-single/user-single.component';
import { ProjectSingleComponent } from './components/project/project-single/project-single.component';
import { MessageComponent } from './components/message/message.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientAddComponent } from './components/client/client-add/client-add.component';
import { ClientIndexComponent } from './components/client/client-index/client-index.component';

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
    ProjectTeamComponent,
    UsersIndexComponent,
    ProjectIndexComponent,
    PaymentIndexComponent,
    UserSingleComponent,
    ProjectSingleComponent,
    MessageComponent,
    ClientListComponent,
    ClientAddComponent,
    ClientIndexComponent,
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
