import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  hasUser$ = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  login$(data: Login): Observable<User> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(
      map((response: User[]) => {
        const user = response.find((u => u.username === data.username && u.password === data.password));

        if (!user) {
          return null;
        }

        return user;
      })
    );
  }

  register$(data: Register): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, data);
  }

  deleteAccount$(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/users/${id}`);
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
    this.setHasUser(null);
  }

  hasPermissions(role: string): boolean {
    const loggedUser = this.getLoggedUserFromLocalStorage();

    return loggedUser.role === role;
  }

  setLoggedUserInLocalStorage(user: User): void {
    delete user.password;

    localStorage.setItem('loggedUser', JSON.stringify(user));

    this.setHasUser(user);
  }

  getLoggedUserFromLocalStorage(): User {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    if (loggedUser) {
      this.setHasUser(loggedUser);
    }

    return loggedUser;
  }

  getHasUser$(): Observable<User> {
    return this.hasUser$.asObservable();
  }

  setHasUser(value: User): void {
    this.hasUser$.next(value);
  }
}
