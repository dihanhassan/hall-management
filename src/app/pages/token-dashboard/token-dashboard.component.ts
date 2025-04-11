import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { UserAuthenticateState } from '../../store/user-authentication/user-authentication.state';
import { BkashPaymentComponent } from '../bkash-payment/bkash-payment.component';

@Component({
  selector: 'app-token-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, BkashPaymentComponent],
  templateUrl: './token-dashboard.component.html',
})
export class TokenDashboardComponent implements OnInit {
  student = {
    id: '',
    name: ''
  };

  selectedMeal = 'Lunch';
  mealDate = new Date().toISOString().substring(0, 10);
  quantity = 1;

  // Halls of MBSTU
  halls = [
    'Shahid Ziaur Rahman Hall',
    'Jananeta Abdul Mannan Hall',
    'Bangabandhu Sheikh Mujibur Rahman Hall',
    'Alema Khatun Bhashani Hall',
    'Jahanara Imam Hall',
    'Sheikh Russel Hall',
    'Bangamata Sheikh Fojilatunnesa Mujib Hall'
  ];
  selectedHall = this.halls[0];

  tokens: any[] = [];

  // Payment modal state
  showPaymentModal = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const userData = this.store.selectSnapshot(UserAuthenticateState.getUserData);
    if (userData) {
      this.student.id = userData.email;
      this.student.name = `${userData.firstName} ${userData.lastName}`;
    }
  }

  openPaymentModal() {
    this.showPaymentModal = true;
  }

  handleBkashConfirm(event: { bkashNumber: string; trxId: string }) {
    const token = {
      hall: this.selectedHall,
      meal: this.selectedMeal,
      date: this.mealDate,
      quantity: this.quantity,
      price: this.quantity * 30,
      studentName: this.student.name,
      studentId: this.student.id,
      bkashNumber: event.bkashNumber,
      trxId: event.trxId
    };

    this.tokens.push(token);
    this.showPaymentModal = false;
    alert('✅ Payment successful and token purchased!');
  }

  cancelPayment() {
    this.showPaymentModal = false;
  }
}
