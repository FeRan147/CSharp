import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/Account/Login`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    if(user.error) throw(JSON.stringify(user.error))
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    if(user.token) localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    register(username: string, email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/Account/Register`, { username: username, email: email, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    if(user.error) throw(JSON.stringify(user.error))
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    if(user.token) localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}