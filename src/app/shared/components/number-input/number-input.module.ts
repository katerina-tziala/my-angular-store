import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input.component';
import { FormsModule } from '@angular/forms';
import { IntegerDirective } from 'src/app/shared/directives/integer.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NumberInputComponent, IntegerDirective],
  exports: [NumberInputComponent]
})
export class NumberInputModule {}
