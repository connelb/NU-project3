import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { SignupComponent } from './auth/signup/component';
//import { SigninComponent } from './user/signin/signin.component';
//import { SigninComponent } from './auth/signin/component';
import { CompareComponent } from './compare/compare.component';
import { AppRoutingModule } from './app-routing.module';
// import { AuthService } from './auth/service';
import { CompareService } from './compare/compare.service';
import { CompareInputComponent } from './compare/compare-input/compare-input.component';
import { CompareResultsComponent } from './compare/compare-results/compare-results.component';
import { FileSizePipe } from '../utils';
import { FwModule } from '../fw/fw.module';

import {
   AuthService,
//   FirstTimePasswordComponent,
//   ForgotPasswordComponent,
//   ResetPasswordComponent,
//   SigninComponent,
//   SignoutComponent
} from '../fw/auth';
// import {HomeComponent} from './home';
// import {HeaderComponent} from './header/component';
// import {FooterComponent} from './footer/component';
import { S3 } from 'aws-sdk';
import { DownloadComponent, DownLoadService } from './download';
import { LoadingComponent } from './loading/component';
import {
  UploadContainerComponent,
  FileUploadComponent,
  UploadService
} from './upload';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
//import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
//import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
//import { UserService } from './services/user.service';
//import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { CountryPanelComponent } from './panels/country-panel/country-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     DashboardComponent,
//     SettingsComponent,
//     CountryDetailComponent,
//     CountryListComponent,
//     CountryMaintComponent,
//     AuthenticatedUserComponent,
//     CountryPanelComponent,
//     ImagePanelComponent

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // HeaderComponent,
    // FooterComponent,
    // CompareComponent,
    // CompareInputComponent,
    // CompareResultsComponent,
    FileSizePipe,
    DownloadComponent,
    UploadContainerComponent,
    FileUploadComponent,
    LoadingComponent,
    // FirstTimePasswordComponent,
    // ForgotPasswordComponent,
    // ResetPasswordComponent,
    // SigninComponent,
    // SignoutComponent,
    AuthenticatedUserComponent,
    DashboardComponent,
    //     AppComponent,
    // DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    // AuthenticatedUserComponent,
    CountryPanelComponent,
    ImagePanelComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FwModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
    AuthService,
    //UserService,
    //{ useExisting: UserService }, 
     //CompareService,
     DownLoadService,
     UploadService,
     AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
