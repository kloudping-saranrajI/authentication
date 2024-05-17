import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'register', component: RegisterComponent },
    { path:'', redirectTo:'', pathMatch:'full' }
];

@NgModule({
    declarations: [], // No need to declare components here 
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
















// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './login/login.component';
// import { AuthService } from './auth.service';
// import { RegisterComponent } from './register/register.component';

// export const routes: Routes = [
//     { path:'login', component:LoginComponent},
//     { path:'register', component:RegisterComponent},
//     { path:'' , redirectTo:'' ,pathMatch:'full'}
// ];

// @NgModule({
//     declarations: [], // Remove declarations if you don't declare any component here
//     imports: [BrowserModule, HttpClientModule, LoginComponent,RegisterComponent, RouterModule.forRoot(routes)], // Import YourModule instead of components
//     providers:[AuthService],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }
