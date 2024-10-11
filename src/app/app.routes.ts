import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';


export const routes: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[AuthGuardService] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }