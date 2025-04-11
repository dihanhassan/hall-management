import { Component } from '@angular/core';
import { NgIf, AsyncPipe } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserAuthenticateState } from '../../../store/user-authentication/user-authentication.state';
import { userAuthenticateAction } from '../../../store/user-authentication/user-authentication.action';
import { Router } from '@angular/router'; // ✅ Corrected import

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // ✅ Corrected property name
})
export class HeaderComponent {
  @Select(UserAuthenticateState.isLogedIn) isLoggedIn$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {} // ✅ Corrected constructor injection

  logout(): void {
    this.store.dispatch(new userAuthenticateAction.ClearResult());
    this.router.navigate(['/login']);
  }
}
