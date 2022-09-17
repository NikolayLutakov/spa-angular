import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/login.model';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  
  onSubmit(): void {
    const body = this.formGroup.value as Login;

    this.authService.login$(body).subscribe({
      next: (user: User) => {
        if(user === null){
          console.log('invalid user') //TODO: fix it
          return
        }

        this.authService.setLoggedUserInLocalStorage(user);
        
        this.router.navigate(['/main'])
      },       
    });
  }
}
