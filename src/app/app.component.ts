import { Component, OnInit } from '@angular/core';
import { Aula } from './models/Aula';
import { Modulo } from './models/Modulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.generateModulos();
  }
  title = 'slp';

  isLogged(): boolean {
    return localStorage.getItem('user') != null;
  }

  generateModulos() {
    let modulo = new Modulo(1, 'Introdução a programação web com Angular');
    modulos.push(modulo);
    this.generateAulas();
  }

  generateAulas() {
    let aula = new Aula('Aula1', modulos[0], [''], 'Primeira Aula', '', '', 'Iniciante', 'VSCode', '',
      'https://www.youtube.com/embed/8d-8fvj3psI');

    let aula2 = new Aula('Aula2', modulos[0], [''], 'Segunda Aula', '', '', 'Iniciante', 'VSCode', '',
      'https://www.youtube.com/embed/8d-8fvj3psI');

    let aula3 = new Aula('Aula3', modulos[0], [''], 'Terceira Aula', '', '', 'Iniciante', 'VSCode', '',
      'https://www.youtube.com/embed/8d-8fvj3psI');

    let aula4 = new Aula('Aula4', modulos[0], [''], 'Quarta Aula', '', '', 'Iniciante', 'VSCode', '',
      'https://www.youtube.com/embed/8d-8fvj3psI');

    let aula5 = new Aula('Aula5', modulos[0], [''], 'Quinta Aula', '', '', 'Iniciante', 'VSCode', '',
      'https://www.youtube.com/embed/8d-8fvj3psI');

    let aula6 = new Aula('Aula6', modulos[0], [''], 'Sexta Aula', '', '', 'Iniciante', 'VSCode', '',
      'https://www.youtube.com/embed/8d-8fvj3psI');


    aulas.push(aula);
    aulas.push(aula2);
    aulas.push(aula3);
    aulas.push(aula4);
    aulas.push(aula5);
    aulas.push(aula6);
  }
}

export var aulas: Aula[] = [];
export var modulos: Modulo[] = [];