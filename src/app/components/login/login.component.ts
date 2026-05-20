import { Component, inject } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  state   = inject(AppStateService);
  loading = false;

  doLogin(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.state.navigate('dashboard');
    }, 700);
  }
}
