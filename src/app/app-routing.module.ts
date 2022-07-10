import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './heroes/hero-form/hero-form.component';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then(
        m => m.HeroesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
