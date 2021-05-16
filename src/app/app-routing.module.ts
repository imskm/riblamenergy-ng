import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserAddComponent } from './components/user/user-add/user-add.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserShowComponent } from './components/user/user-show/user-show.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectAddComponent } from './components/project/project-add/project-add.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';
import { ProjectShowComponent } from './components/project/project-show/project-show.component';
import { ProjectTeamBuildComponent } from './components/project/project-team-build/project-team-build.component';
import { ProjectTeamComponent } from './components/project/project-team/project-team.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { PaymentAddComponent } from './components/payment/payment-add/payment-add.component';
import { PaymentShowComponent } from './components/payment/payment-show/payment-show.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientAddComponent } from './components/client/client-add/client-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/add', component: UserAddComponent},
  { path: 'user/:id/edit', component: UserEditComponent},
  { path: 'user/:id/show', component: UserShowComponent},
  { path: 'projects', component: ProjectListComponent },
  { path: 'project/add', component: ProjectAddComponent },
  { path: 'project/:id/edit', component: ProjectEditComponent },
  { path: 'project/:id/show', component: ProjectShowComponent },
  { path: 'project/team/build', component: ProjectTeamBuildComponent },
  { path: 'project/:id/team', component: ProjectTeamComponent },
  { path: 'payments', component: PaymentListComponent },
  { path: 'payment/add', component: PaymentAddComponent },
  { path: 'payment/:id/show', component: PaymentShowComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'client/add', component: ClientAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
