import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my_text_input',
  templateUrl: './my_text_input.component.html',
  styleUrls: ['./my_text_input.component.scss']
})
export class MyTextInputComponent {

  _textoDigitado: String = '';
  valueChanged: any;

  @Input('value')
  set textoDigitado(newValue: String){
    this._textoDigitado = newValue
    this.valueChanged.emit(this._textoDigitado);
  }

  get textoDititado(){
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
  valuechanged = new EventEmitter();

  @Output()
  enterEvent = new EventEmitter();

}
