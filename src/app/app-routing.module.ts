import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './front/home/home.component';
import { LoginComponent } from './front/login/login.component';
import { RegisterComponent } from './front/register/register.component';
import { ResetpasswordComponent } from './front/resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './front/updatepassword/updatepassword.component';
import { ProfileComponent } from './front/profile/profile.component';
import { UpdateuserComponent } from './front/updateuser/updateuser.component';
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { TestComponent } from './back/test/test.component';
import { ReclamationsComponent } from './back/reclamations/reclamations.component';
import { TypereclamationsComponent } from './back/typereclamations/typereclamations.component';
import { AddReclamationComponent } from './front/reclamation/add-reclamation/add-reclamation.component';
import { AddtypeReclamationComponent } from './front/typereclamation/addtype-reclamation/addtype-reclamation.component';
import { AddreclamationComponent } from './front/reclamationclient/addreclamation/addreclamation.component';
import { AddUsersComponent } from './back/users/add-users/add-users.component';
import { ListUsersComponent } from './back/users/list-users/list-users.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddorganisationComponent } from './front/organisation/addorganisation/addorganisation.component';
import { OrganisationlistComponent } from './back/organisation/organisationlist/organisationlist.component';
import { ListclientorgComponent } from './front/organisation/listclientorg/listclientorg.component'

const routes: Routes = [
   {
      path: '', component: HomeComponent, children: [
         { path: 'home', component: HomeComponent },
         { path: 'login', component: LoginComponent },
         { path: 'register', component: RegisterComponent },
         { path: 'update', component: UpdatepasswordComponent },
         { path: 'reset', component: ResetpasswordComponent },
         { path: 'profile', component: ProfileComponent },
         { path: 'updateuser/:id', component: UpdateuserComponent },
         { path: 'dashboard', component: DashboardComponent },
         { path: 'test', component: TestComponent },
         { path: 'reclamation', component: ReclamationsComponent },
         { path: 'typereclamation', component: TypereclamationsComponent },
         { path: 'addreclamation', component: AddReclamationComponent },
         { path: 'typerec', component: AddtypeReclamationComponent },
        {path:'adduser',component:AddUsersComponent},
   {path:'listuser',component:ListUsersComponent},
   {path:'addorganisation',component:AddorganisationComponent},
   {path:'organisationadmin',component:OrganisationlistComponent},
   {path:'client',component:ListclientorgComponent},
         { path: 'recagent', component: AddreclamationComponent }

      ]
   }];



@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
