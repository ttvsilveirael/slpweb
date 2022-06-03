import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-item',
  templateUrl: './menu_item.component.html',
  styleUrls: ['./menu_item.component.scss']
})
export class MenuItemComponent {
  menuItems = ['Aulas', 'Perfil'];
  constructor(private router:Router){}
  
  abrirPagina(item:String){
    this.router.navigate(['/' + item.toLowerCase()]);
  }
}
