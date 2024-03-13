import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/components/login/login.component';
import { MainPageComponent } from 'src/components/main-page/main-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
