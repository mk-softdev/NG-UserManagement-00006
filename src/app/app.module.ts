import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressComponent } from './address/address.component';
import { UsertableComponent } from './usertable/usertable.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ParameterComponent } from './parameter/parameter.component';
import { Nested1Component } from './nested1/nested1.component';
import { Nested2Component } from './nested2/nested2.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UnSavedChangesGuard } from './guards/un-saved-changes.guard';
import { ResolveGuard } from './guards/resolve.guard';

const routes : Routes = [
  { path: '', redirectTo:'users', pathMatch:'full' },
  { path: 'users', component: UserComponent,
  canActivate: [AuthGuard],
  resolve: {
    data: ResolveGuard
  }
},
  {path: 'adduser',component:AddUserComponent,canDeactivate:[UnSavedChangesGuard]},

  { path: 'parameter/:id', component: ParameterComponent,
  //canActivate:[AuthGuard],
  canActivateChild:[AdminGuard],
    children : [
      //{path:'',redirectTo:'Nested1Component',pathMatch:'full'},
      {path: 'nested1', component: Nested1Component},
      {path : 'nested2', component: Nested2Component},
      {path:'**',redirectTo:'Nested1Component'}
    ] },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactComponent,
    children : [
      {path:'location',outlet:'loc',component:LocationComponent},
      {path:'feedback',outlet:'feed',component:FeedbackComponent}
    ]
   },
  { path: '**', redirectTo:'users' },
];



@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    UsertableComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    ParameterComponent,
    Nested1Component,
    Nested2Component,
    LocationComponent,
    FeedbackComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, RouterModule.forRoot(routes)

  ],
  providers: [UsersService, AuthGuard, AdminGuard, UnSavedChangesGuard, ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
