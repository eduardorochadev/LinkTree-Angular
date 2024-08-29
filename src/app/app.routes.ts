import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { LinktreeComponent } from './linktree/linktree.component';

export const routes: Routes = [
  { path: '', redirectTo: '/linktree', pathMatch: 'full' }, // Redireciona a rota vazia para o componente LinktreeComponent
  { path: 'linktree', component: LinktreeComponent }, // Componente LinktreeComponent
  { path: 'about-me', component: AboutMeComponent }, // Componente AboutMeComponent
  { path: '**', redirectTo: '/linktree' } // Redireciona qualquer rota não encontrada para o LinktreeComponent
];

