import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { aulas } from 'src/app/app.component';
import { Aula } from 'src/app/models/Aula';
import { Modulo } from 'src/app/models/Modulo';

@Component({
    selector: 'aulas',
    templateUrl: './aulas.component.html',
    styleUrls: ['./aulas.component.scss']
})
export class AulasComponent {
    constructor(private sanitizer: DomSanitizer, private router: Router) {
    }

    get aulas() {
        return aulas.filter(
            aula => aula.nome.toLowerCase().includes(this.filterText.toLowerCase()));
    }

    safeSrc(aula: Aula) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(aula.youtube);
    }

    openAula(index: number) {

        this.router.navigate(['aula'], { queryParams: { id: index } });
    }

    filterText: string = '';
}