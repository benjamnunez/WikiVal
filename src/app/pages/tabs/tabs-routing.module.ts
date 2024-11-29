import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'agentes',
        loadChildren: () => import('../aplicacion/agentes/agentes.module').then(m => m.AgentesPageModule)
      },
      {
        path: 'armas',
        loadChildren: () =>import('../aplicacion/armas/armas.module').then(m => m.ArmasPageModule)
      },
      {
        path:'perfil',
        loadChildren: () =>import('../auth/perfil/perfil.module').then(m=>m.PerfilPageModule)
      },
      {
        path:'mapas',
        loadChildren: () =>import('../aplicacion/mapas/mapas.module').then(m=>m.MapasPageModule)
      },
      {
        path:'',
        redirectTo:'/tabs/armas',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/armas',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
