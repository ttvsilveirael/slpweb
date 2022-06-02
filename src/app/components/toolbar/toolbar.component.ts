import { ViewChild } from '@angular/core';
import {Component} from '@angular/core';
@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']

})
export class ToolbarComponent{
  @ViewChild(Trigger)
  Trigger: ToolbarComponent = new ToolbarComponent;

  someMethod() {
    this.Trigger.openMenu();
  }
  openMenu() {
    throw new Error('Method not implemented.');
  }
}
function Trigger(_trigger: any) {
  throw new Error('Function not implemented.');
}

