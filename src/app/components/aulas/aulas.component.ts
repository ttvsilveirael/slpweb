import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Aula } from 'src/app/models/Aula';

@Component({
  selector: 'aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.scss']
})
export class AulasComponent {
  @Input()
  aula!: Aula;
  constructor(private sanitizer: DomSanitizer, private router: Router) {
  }
  safeSrc(aula: Aula) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(aula.link);
  }

  openAula(index: number) {

    this.router.navigate(['aula'], { queryParams: { id: index } });
  }

  filterText: string = '';
}