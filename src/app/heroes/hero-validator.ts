import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, timer, filter, switchMap, map } from 'rxjs';
import { HeroService } from './hero.service';

export function existsName(heroService: HeroService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(800).pipe(
      filter(_ => !!control.value),
      switchMap(() => heroService.existsName(control.value)),
      map(heroes => (heroes?.length > 0 ? { existsName: true } : null))
    );
  };
}
