import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from 'src/app/services/app.service';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private appService: AppService) {}

  paymentForm: FormGroup;
  totalAmount: number;
  ngOnInit(): void {
    //Initializing Payment Form
    this.paymentForm = this.fb.group({
      cardNo: ['', [Validators.required,
      Validators.pattern(/[\d]{4} [\d]{4} [\d]{4} [\d]{4}/i)
      ]],
      expiry: ['', Validators.required],
      location: ['', Validators.required],
      contact: ['', [Validators.required, Validators.min(1000000000)]],
      cvv: ['', [Validators.required, Validators.min(100), Validators.max(1000)]]
    });
    this.totalAmount = this.appService.totalPrice;
  }
  //Setting getters so as to make validation inside template simple
  get expiry() {
    return this.paymentForm.get('expiry');
  }
  get cardNo() {
    return this.paymentForm.get('cardNo');
  }
  get location() {
    return this.paymentForm.get('location');
  }
  get contact() {
    return this.paymentForm.get('contact');
  }
  get cvv() {
    return this.paymentForm.get('cvv')
  }

  submit() {
    let items = this.appService.cartItems;
    let payment = this.paymentForm.value;
    payment.totalPrice = this.totalAmount;
    console.log({items, payment});
    this.paymentForm.reset();
    this.appService.addToOrderedItems();
    this.toastr.success("Order Placement Successful.");
  }

}
