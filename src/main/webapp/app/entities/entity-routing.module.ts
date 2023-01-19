import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'agent',
        data: { pageTitle: 'interventionApp.agent.home.title' },
        loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule),
      },
      {
        path: 'chef-service',
        data: { pageTitle: 'interventionApp.chefService.home.title' },
        loadChildren: () => import('./chef-service/chef-service.module').then(m => m.ChefServiceModule),
      },
      {
        path: 'client',
        data: { pageTitle: 'interventionApp.client.home.title' },
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
      },
      {
        path: 'demande',
        data: { pageTitle: 'interventionApp.demande.home.title' },
        loadChildren: () => import('./demande/demande.module').then(m => m.DemandeModule),
      },
      {
        path: 'tache',
        data: { pageTitle: 'interventionApp.tache.home.title' },
        loadChildren: () => import('./tache/tache.module').then(m => m.TacheModule),
      },
      {
        path: 'materiel',
        data: { pageTitle: 'interventionApp.materiel.home.title' },
        loadChildren: () => import('./materiel/materiel.module').then(m => m.MaterielModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
