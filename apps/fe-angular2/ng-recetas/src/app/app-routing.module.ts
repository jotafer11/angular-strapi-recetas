import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecetaComponent } from './components/receta/receta.component';

const routes: Routes = [

{ path:'', pathMatch: 'full', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'receta/:recetaId', component: RecetaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
