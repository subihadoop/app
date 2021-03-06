import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import {catchError, map, tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {environment} from '../../../environments/environment';
import * as _ from 'lodash';
import {HttpService} from '../../shared/services/http.service';
//const transactions = require('../../../reports');

@Injectable()
export class AuthService {
    token: string;

    constructor(private _http: HttpClient,
                private _router: Router,
                private _httpService: HttpService) {
    }


    signupUser(body: any): Observable<any> {
        return this._httpService.post('/signup', body);
    }

    
    
    signinUser(username: string, password: string): Observable<any> {
        
        const body = {
            'username': username,
            'password': password
        };
        return this._httpService.post('/login', body)
            .pipe(
                tap(
                    (data: { data: any, response: string, response_message: Array<any> }) => {
                        if (data.response === 'success') {
                            if (data && data.data) {
                                localStorage.setItem('token', data.data);
                            }
                            return data;
                            console.log(data);
                        }
                    }),
                catchError(error => Observable.throw(error || 'Internal server error'))
            );
    }

    isLoggedIn(): boolean {
        const isLoggedIn = localStorage.getItem('token');
        return (isLoggedIn ? true : false);
    }

    logout(): void {
        if (this.isLoggedIn()) {
            localStorage.removeItem('token');
            const options = {
                headers: new HttpHeaders()
                    .set('Authorization', 'bearer ' + this.getToken())
                    .set('Content-Type', 'application/json')
            };
            // return this._http.get(
            //     this.serverBase + '/auth/logout',
            //     options
            // ).map(response => {
            //     if (response) {
            //         return response;
            //     }
            // }).catch(this._errorHandler);
        }
        localStorage.removeItem('token');
        this.token = null;
    }

    getUserInfo() {
        
        const userToken = this.getToken();
        if (userToken) {
            let payload = userToken.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return payload;
        }
        return null;
    }

    getRole(): string {
        const userInfo = this.getUserInfo();
        if (userInfo) {
            return userInfo['role'] || '';
        } else {
            return null;
        }
    }

    getToken(): string {
        return localStorage.getItem('token');
    }
    getRprt() {
        
        const userToken = this.getToken();
        if (userToken) {
            let payload = userToken.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return payload;
        }
        return null;
    }
    isAuthenticated() {
        if (localStorage.getItem('token')) {
            return true;
        }
        this._router.navigate(['/login']);
        return false;
    }

    _errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error || 'Internal server error');
    }
}
