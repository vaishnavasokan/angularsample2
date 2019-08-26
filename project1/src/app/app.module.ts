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
import {CalcService} from './calc.service';
import {SampleService} from './sample.service'

const approutes:Routes=[{path:"new",component:AddproductComponent},
{path:"edit",component:EditproductComponent},
{path:"del",component:DeleteproductComponent},
{path:"view",component:ViewproductComponent},
{path:"about",component:AboutusComponent},
{path:"contact",component:ContactusComponent},
{path:"service",component:DataComponent}];

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
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [CalcService,SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
