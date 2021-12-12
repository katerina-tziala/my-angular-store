import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/models/models';

@Component({
  selector: 'app-order-customer-form',
  templateUrl: './order-customer-form.component.html',
  styleUrls: ['./order-customer-form.component.scss']
})
export class OrderCustomerFormComponent {
  @Output() public formSubmission = new EventEmitter<Customer>();

  public form = this.fb.group({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(14)
    ]),
    address: new FormControl(null, [
      Validators.required,
      Validators.minLength(5)
    ]),
    zip: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ])
  });

  constructor(private fb: FormBuilder) {}

  public invalidField(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return field && field.errors && field.touched ? true : false;
  }

  public onSubmit(): void {
    this.formSubmission.emit(this.form.value);
  }
}
