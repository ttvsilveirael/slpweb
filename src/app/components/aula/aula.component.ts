import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Route } from '@angular/router';
import { aulas } from 'src/app/app.component';
import { Aula } from 'src/app/models/Aula';

@Component({
    selector: 'aula',
    templateUrl: './aula.component.html',
    styleUrls: ['./aula.component.scss']
})
export class AulaComponent {
    aula: Aula | undefined;
    constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            let id = params['id'];
            this.aula = this.getAula(id);
        });
    }


    get aulas() { return aulas }
    getAula(posicao: number = 0) {
        if (aulas == null) {
            return;
        }
        if (aulas.length == 0) {
            return;
        }
        return aulas[posicao] as Aula;
    }

    safeSrc(aula: Aula | undefined) {
        if (aula == undefined) { return; }
        return this.sanitizer.bypassSecurityTrustResourceUrl(aula.youtube);
    }

}