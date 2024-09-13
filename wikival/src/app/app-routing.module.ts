import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'agentes',
    pathMatch: 'full'
  },
  {
    path: 'agentes',
    loadChildren: () => import('./pages/agentes/agentes.module').then( m => m.AgentesPageModule)
  },
  {
    path: 'armas',
    loadChildren: () => import('./pages/armas/armas.module').then( m => m.ArmasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
