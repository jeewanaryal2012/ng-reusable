import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Nav
import { NavComponent } from './common/nav/nav.component';
import { ContainerComponent } from './components/container/container.component';
import { MultiTypeaheadComponent } from './components/multi-typeahead/multi-typeahead.component';



const routes: Routes = [
  { path: 'nav', component: NavComponent },
  { path: 'container', component: ContainerComponent },
  { path: 'multi-typeahead', component: MultiTypeaheadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
