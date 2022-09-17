import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../../models/register.model';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  roles = ['user', 'organisation']

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: [this.roles[0]]
    });
  }
  
  onSubmit(): void {
    const body = this.formGroup.value as Register;

    this.authService.register$(body).subscribe({
      next: (user: User) => {
        this.authService.setLoggedUserInLocalStorage(user);
        
        this.router.navigate(['/main'])
      }
    });
  }

}
