import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet,MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }
  errorMessage: string | null = null;
  authService = inject(AuthService)
  form = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    const rawForm = this.form.getRawValue();
    const email = rawForm.Email ?? '';
    const password = rawForm.Password ?? '';

    this.authService.login(email, password).subscribe(
      {
        next: () => {
          this.router.navigateByUrl('/home');
        },
        error: (err) => {
          this.errorMessage = err.code
        }
      });
  }

  signInWithGoogle(){
    this.authService.signInWithGoogle().subscribe(()=>{ 
      this.router.navigate(['/home']); 
    })
  }
}
