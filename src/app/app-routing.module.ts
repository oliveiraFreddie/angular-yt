import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponentComponent,
  },
  {
    path: 'list',
    component: ListRenderComponent,
  },
  {
    path: 'list/:id',
    component: ItemDetailComponent,
  },
  {
    path: 'if',
    component: IfRenderComponent,
  },
  {
    path: 'event',
    component: EmitterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
