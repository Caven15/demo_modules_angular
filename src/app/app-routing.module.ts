import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path : 'exercices', loadChildren: () => import("./modules/exercies/exercies.module").then(m => m.ExerciesModule)},
  { path : 'demonstrations', loadChildren: () => import("./modules/demonstrations/demonstrations.module").then(m => m.DemonstrationsModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
