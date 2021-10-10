import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { TradeEntryComponent } from './trade-entry/trade-entry.component';

const routes: Routes = [
  { path: 'trades', component: MainComponent }, 
{ path: 'view', component: TradeEntryComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent }, 
{ path: '', redirectTo: 'login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
