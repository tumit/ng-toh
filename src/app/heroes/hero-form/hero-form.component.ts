import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { existsName } from '../hero-validator';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  heroFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', {
      nonNullable: true,
      asyncValidators: existsName(this.heroService),
    }),
  });

  constructor(
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  onBack() {
    this.location.back();
  }

  onSave() {
    if (!this.heroFormGroup.controls.name.value) {
      return;
    }

    if (this.heroFormGroup.get('id')?.value) {
      this.heroService
        .updateHero(this.heroFormGroup.getRawValue())
        .subscribe(() => this.onBack());
    } else {
      this.heroService
        .addNewHero(this.heroFormGroup.getRawValue())
        .subscribe(() => this.onBack());
    }
  }
}
