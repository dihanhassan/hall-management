import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkashPaymentComponent } from './bkash-payment.component';

describe('BkashPaymentComponent', () => {
  let component: BkashPaymentComponent;
  let fixture: ComponentFixture<BkashPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BkashPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BkashPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
