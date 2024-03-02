import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importa los componentes que deseas utilizar en las rutas

// Define las rutas de tu aplicación
const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'reactive'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
