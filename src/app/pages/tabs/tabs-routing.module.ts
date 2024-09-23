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
        loadChildren: () => import('../agentes/agentes.module').then(m => m.AgentesPageModule)
      },
      {
        path: 'armas',
        loadChildren: () =>import('../armas/armas.module').then(m => m.ArmasPageModule)
      },
      {
        path:'home',
        loadChildren: () =>import('../home/home.module').then(m=>m.HomePageModule)
      },
      {
        path:'sprays',
        loadChildren: () =>import('../sprays/sprays.module').then(m=>m.SpraysPageModule)
      },
      {
        path:'',
        redirectTo:'/tabs/home',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
