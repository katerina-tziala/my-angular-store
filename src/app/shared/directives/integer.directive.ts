import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { getNumberInBoundaries } from '../../utilities/numbers';

@Directive({
  selector: '[appInteger]'
})
export class IntegerDirective {
  @Input() minValue: number | undefined;
  @Input() maxValue: number | undefined;

  constructor(private inputField: ElementRef, public model: NgControl) {}

  @HostListener('input', ['$event']) onEvent() {
    const positiveInteger = getNumberInBoundaries(
      this.positiveInteger,
      this.minValue,
      this.maxValue
    );
    this.model?.control?.setValue(positiveInteger);
    this.model?.valueAccessor?.writeValue(positiveInteger);
  }

  private get positiveInteger(): number | undefined {
    const integer = parseInt(this.inputField.nativeElement.value.toString());
    return isNaN(integer) ? undefined : integer;
  }
}
