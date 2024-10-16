import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router) { }
  errorMessage: string | null = null;
  authService = inject(AuthService)
  form = new FormGroup({
    Username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const rawForm = this.form.getRawValue();
    const email = rawForm.email ?? '';
    const username = rawForm.Username ?? '';
    const password = rawForm.password ?? '';

    this.authService.register(email, username, password).subscribe(
      {
        next: () => {
          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          this.errorMessage = err.code
        }
      });
  }

}
