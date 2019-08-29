import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DataComponent } from './data/data.component';
import {SampleService} from './sample.service'
import {ProductService} from './product.service'
import {CalcService} from './calc.service'
import {StorageServiceModule} from 'angular-webstorage-service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'

const approutes:Routes=[
  {path:"", component:LoginComponent},
  {path:"home",component:HomeComponent,
  children:[{path:"new",component:AddproductComponent},
{path:"edit/:id",component:EditproductComponent},
{path:"del",component:DeleteproductComponent},
{path:"view",component:ViewproductComponent},
{path:"about/:cname/:loc",component:AboutusComponent},
{path:"contact",component:ContactusComponent},
{path:"service",component:DataComponent}]
  }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddproductComponent,
    EditproductComponent,
    DeleteproductComponent,
    ViewproductComponent,
    AboutusComponent,
    ContactusComponent,
    DataComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [CalcService,SampleService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
