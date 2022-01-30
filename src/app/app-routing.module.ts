import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client/components/client-list/client-list.component';
import { LoginComponent } from './authentification/components/login/login.component';
import { ClientFormComponent } from './client/components/client-form/client-form.component';
import { AccountListComponent } from './account/components/account-list/account-list.component';
import { AccountFormComponent } from './account/components/account-form/account-form.component';
import { AuthGuardService } from './authentification/services/auth-guard.service';
import { TransferFormComponent } from './transfer/components/transfer-form/transfer-form.component';
import { TransferListComponent } from './transfer/components/transfer-list/transfer-list.component';
import { TransferDoneComponent } from './transfer/components/transfer-done/transfer-done.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'clients',
    component: ClientListComponent,
  },
  {
    path: 'clientForm',
    component: ClientFormComponent,
  },
  {
    path: 'client/:id/accounts',
    component: AccountListComponent,
  },
  {
    path: 'client/:id/accountForm',
    component: AccountFormComponent,
  },
  
  {
    path: 'compte/transfertForm',
    component: TransferFormComponent,
  },
  {
    path: 'compte/:id/transfets',
    component: TransferListComponent,
  },
  {
    path: 'transfertEffectue/:id',
    component: TransferDoneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}