import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeAdmComponent } from './components/home-adm/home-adm.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'home-adm', component: HomeAdmComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalhes', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
