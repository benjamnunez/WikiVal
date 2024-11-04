import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { autenticadoGuard } from './guards/autenticado.guard';
import { noAutenticadoGuard } from './guards/no-autenticado.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'agentes',
    loadChildren: () => import('./pages/agentes/agentes.module').then( m => m.AgentesPageModule),
    canActivate: [autenticadoGuard]
  },
  {
    path: 'armas',
    loadChildren: () => import('./pages/armas/armas.module').then( m => m.ArmasPageModule),
    canActivate: [autenticadoGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [autenticadoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [noAutenticadoGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [autenticadoGuard]
  },
  {
    path: 'sprays',
    loadChildren: () => import('./pages/sprays/sprays.module').then( m => m.SpraysPageModule),
    canActivate: [autenticadoGuard]


  },
  {
    path: 'forgot-account',
    loadChildren: () => import('./pages/forgot-account/forgot-account.module').then( m => m.ForgotAccountPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
