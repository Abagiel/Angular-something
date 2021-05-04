import { Directive, HostBinding, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightGender]'
})
export class HighlightGenderDirective {
	@Input('appHighlightGender') gender: string = 'M';
	@HostBinding('class') clas: string = '';

  constructor(el: ElementRef) { 
    this.clas = this.getGender();
  }

  private getGender() {
    console.log('directive');
    return this.gender === 'F' ? 'gender-female' : 'gender-male';
  }
}
