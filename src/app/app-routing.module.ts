import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alerta',
    loadChildren: () => import('./paginas/alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'botons',
    loadChildren: () => import('./paginas/botons/botons.module').then( m => m.BotonsPageModule)
  },
  {
    path: 'tarjetas',
    loadChildren: () => import('./paginas/tarjetas/tarjetas.module').then( m => m.TarjetasPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./paginas/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },  {
    path: 'botonfloat',
    loadChildren: () => import('./paginas/botonfloat/botonfloat.module').then( m => m.BotonfloatPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./paginas/item/item.module').then( m => m.ItemPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
