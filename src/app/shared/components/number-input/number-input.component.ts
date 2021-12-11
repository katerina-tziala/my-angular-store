import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  getNumberInBoundaries,
  isValidNumber,
  getValueCheckedOnMaxBound,
  getValueCheckedOnMinBound
} from '../../../utilities/numbers';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {
  @Input() public step = 1;
  @Input() public value: number | undefined;
  @Input() public minValue: number | undefined;
  @Input() public maxValue: number | undefined;
  @Output() public onChange = new EventEmitter<number | undefined>();

  public ngOnInit() {
    const newValue = getNumberInBoundaries(
      this.value,
      this.minValue,
      this.maxValue
    );
    this.checkValueChange(newValue);
  }

  public get increaseDisabled(): boolean {
    const valueValid = isValidNumber(this.value);
    if (!valueValid && !isValidNumber(this.maxValue)) {
      return true;
    }
    return valueValid && this.value === this.maxValue;
  }

  public get decreaseDisabled(): boolean {
    const valueValid = isValidNumber(this.value);
    if (!valueValid && !isValidNumber(this.minValue)) {
      return true;
    }
    return valueValid && this.value === this.minValue;
  }

  private getUpdatedValue(
    step: number,
    defaultValue: number | undefined
  ): number | undefined {
    if (!isValidNumber(this.value)) {
      return defaultValue;
    }
    return (this.value as number) + step;
  }

  private checkValueChange(newValue: number | undefined): void {
    if (newValue !== this.value) {
      this.value = newValue;
      this.submitUpdatedValue();
    }
  }

  public submitUpdatedValue(): void {
    this.onChange.emit(this.value);
  }

  public increaseValue(): void {
    const increasedValue = this.getUpdatedValue(this.step, this.minValue);
    const newValue = getValueCheckedOnMaxBound(increasedValue, this.maxValue);
    this.checkValueChange(newValue);
  }

  public decreaseValue(): void {
    const increasedValue = this.getUpdatedValue(-this.step, this.maxValue);
    const newValue = getValueCheckedOnMinBound(increasedValue, this.minValue);
    this.checkValueChange(newValue);
  }
}
