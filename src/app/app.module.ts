import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './front/header/header.component';
import { FooterComponent } from './front/footer/footer.component';
import { HomeComponent } from './front/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './front/login/login.component';
import { RegisterComponent } from './front/register/register.component';
import { ResetpasswordComponent } from './front/resetpassword/resetpassword.component';
import { FormsModule } from '@angular/forms';
import { UpdatepasswordComponent } from './front/updatepassword/updatepassword.component';
import { ProfileComponent } from './front/profile/profile.component';
import { UpdateuserComponent } from './front/updateuser/updateuser.component';
import { CookieService } from 'ngx-cookie-service';
import {FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig, SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { DashboardComponent } from './back/dashboard/dashboard.component';
import { NavbaradminComponent } from './back/navbaradmin/navbaradmin.component';
import { TestComponent } from './back/test/test.component';
import { ReclamationsComponent } from './back/reclamations/reclamations.component';
import { TypereclamationsComponent } from './back/typereclamations/typereclamations.component';
import { AddReclamationComponent } from './front/reclamation/add-reclamation/add-reclamation.component';
import { AddtypeReclamationComponent } from './front/typereclamation/addtype-reclamation/addtype-reclamation.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2OrderPipe } from 'ng2-order-pipe/dist/src/ng2-order.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddreclamationComponent } from './front/reclamationclient/addreclamation/addreclamation.component';
import { AddUsersComponent } from './back/users/add-users/add-users.component';
import { ListUsersComponent } from './back/users/list-users/list-users.component';
import { AddorganisationComponent } from './front/organisation/addorganisation/addorganisation.component';
import { OrganisationlistComponent } from './back/organisation/organisationlist/organisationlist.component';
import { ListclientorgComponent } from './front/organisation/listclientorg/listclientorg.component';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    UpdatepasswordComponent,
    ProfileComponent,
    UpdateuserComponent,
    DashboardComponent,
    NavbaradminComponent,
    TestComponent,
    ReclamationsComponent,
    TypereclamationsComponent,
    AddReclamationComponent,
    AddtypeReclamationComponent,
    AddreclamationComponent,
     AddUsersComponent,
    ListUsersComponent,
    AddorganisationComponent,
    OrganisationlistComponent,
    ListclientorgComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule, SocialLoginModule,Ng2SearchPipeModule,Ng2OrderModule,
   NgxPaginationModule,ChartsModule,NgxStarRatingModule

   
  ],
 
  providers: [{provide: APP_BASE_HREF, useValue: ''},CookieService,
  SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '998943596311-agii5b72rppsj1h1tdp5f75mhnfj22s7.apps.googleusercontent.com'
            )
          },
          
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('199333295751525'
            )
          }
        ],
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
]

,
  bootstrap: [AppComponent]
})
export class AppModule { }
