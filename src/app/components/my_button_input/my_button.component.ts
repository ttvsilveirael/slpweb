import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my_button.component.html',
  styleUrls: ['./my_button.component.scss']
})
export class MyButtonComponent {

    @Input()
    label: String = '';

    @Input()
    disabled = false;
}