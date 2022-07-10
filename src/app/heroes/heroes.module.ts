import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero-form',
    component: HeroFormComponent,
  },
];

@NgModule({
  declarations: [HeroFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class HeroesModule {}
