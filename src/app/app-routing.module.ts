import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { noAuthGuard } from './guards/no-auth.guard';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'agentes',
    loadChildren: () => import('./pages/aplicacion/agentes/agentes.module').then( m => m.AgentesPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'armas',
    loadChildren: () => import('./pages/aplicacion/armas/armas.module').then( m => m.ArmasPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [noAuthGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'forgot-account',
    loadChildren: () => import('./pages/auth/forgot-account/forgot-account.module').then( m => m.ForgotAccountPageModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./pages/aplicacion/mapas/mapas.module').then( m => m.MapasPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/aplicacion/game/game.module').then( m => m.GamePageModule),
    canActivate: [authGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/auth/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'lineups',
    loadChildren: () => import('./pages/aplicacion/lineups/lineups.module').then( m => m.LineupsPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
