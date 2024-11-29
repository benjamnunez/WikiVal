import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'agentes',
    loadChildren: () => import('./pages/Aplicacion/agentes/agentes.module').then( m => m.AgentesPageModule)
  },
  {
    path: 'armas',
    loadChildren: () => import('./pages/Aplicacion/armas/armas.module').then( m => m.ArmasPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/PagsinUSAR/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/Aplicacion/tabs/tabs.module').then( m => m.TabsPageModule)
  },
 
  {
    path: 'forgot-account',
    loadChildren: () => import('./pages/auth/forgot-account/forgot-account.module').then( m => m.ForgotAccountPageModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./pages/Aplicacion/mapas/mapas.module').then( m => m.MapasPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/Aplicacion/game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/auth/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'lineups',
    loadChildren: () => import('./pages/Aplicacion/lineups/lineups.module').then( m => m.LineupsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
