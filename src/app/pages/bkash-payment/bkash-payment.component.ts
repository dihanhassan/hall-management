import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bkash-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bkash-payment.component.html',
})
export class BkashPaymentComponent {
  @Input() visible = false;
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<{ bkashNumber: string; trxId: string }>();

  bkashNumber = '';
  trxId = '';

  onCancel() {
    this.reset();
    this.cancel.emit();
  }

  onConfirm() {
    if (this.bkashNumber && this.trxId) {
      this.confirm.emit({ bkashNumber: this.bkashNumber, trxId: this.trxId });
      this.reset();
    } else {
      alert('Please enter both bKash Number and Transaction ID.');
    }
  }

  private reset() {
    this.bkashNumber = '';
    this.trxId = '';
  }
}
