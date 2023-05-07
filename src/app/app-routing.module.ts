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

const routes: Routes = [
   {
      path: '', component: HomeComponent, children: [
         { path: 'home', component: HomeComponent },
         { path: 'home/login', component: LoginComponent },
         { path: 'home/register', component: RegisterComponent },
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
         { path: 'recagent', component: AddreclamationComponent }

      ]
   }];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
