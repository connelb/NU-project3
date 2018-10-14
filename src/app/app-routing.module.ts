import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { SigninComponent } from './user/signin/signin.component';
// import { SigninComponent } from './auth/signin/component';
// import { SignupComponent } from './auth/signup/component';
// import { CompareComponent } from './compare/compare.component';
//import { AuthGuard } from './user/auth-guard.service';
import { DownloadComponent } from './download';
import { UploadContainerComponent } from './upload';
// import {HomeComponent} from './home';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  AuthService,
  FirstTimePasswordComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent,
  SigninComponent,
  SignoutComponent
} from '../fw/auth';

//import { SigninComponent } from '../fw/auth/signin/component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },

  // { path: 'download',component: DownloadComponent},

  { path: 'signin', component: SigninComponent },
  { path: 'first-time-password',component: FirstTimePasswordComponent},
  { path: 'forgot-password',component: ForgotPasswordComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  { path: 'signout',component: SignoutComponent},
   { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
     children: [
       { path: '', canActivateChild: [AuthGuard],
         children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            // { path: 'home', component: HomeComponent },
            // { path: 'upload',component: UploadContainerComponent},
//           { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
//           { path: 'country-list/:count', component: CountryListComponent },
//           { path: 'country-detail/:id/:operation', component: CountryDetailComponent },
//           { path: 'country-maint', component: CountryMaintComponent },
//           { path: 'settings', component: SettingsComponent },
         ] }
    ] },
  //{ path: 'compare', canActivate: [AuthGuard], component: CompareComponent },

  { path: '', component: SigninComponent  },
  { path: '**', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService ]//[AuthGuard]
})
export class AppRoutingModule {}

// export const appRoutes: Routes = [  
//   { path: 'signin', component: SignInComponent },
//   { path: 'register', component: RegisterUserComponent },
//   { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
//     children: [
//       { path: '', canActivateChild: [AuthGuard],
//         children: [
//           { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//           { path: 'dashboard', component: DashboardComponent },
//           { path: 'country-list/:count', component: CountryListComponent },
//           { path: 'country-detail/:id/:operation', component: CountryDetailComponent },
//           { path: 'country-maint', component: CountryMaintComponent },
//           { path: 'settings', component: SettingsComponent },
//         ] }
//     ] },
//   { path: '', component: SignInComponent },
//   { path: '**', component: SignInComponent }
// ];
