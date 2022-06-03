import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-textinput',
  templateUrl: './my_text_input.component.html',
  styleUrls: ['./my_text_input.component.scss']
})
export class MyTextInputComponent {

  _textoDigitado: String = '';

  @Input('value')
  set textoDigitado(newValue: String) {
    this._textoDigitado = newValue
    this.valueChanged.emit(newValue);
  }

  get textoDigitado() {
    return this._textoDigitado;
  }

  pressEnter() {
    this.enterEvent.emit();
  }

  @Input('type')
  inputType: String = 'text';

  @Input()
  placeholder: String = '';

  @Output()
  valueChanged = new EventEmitter();

  @Output()
  enterEvent = new EventEmitter();

}
