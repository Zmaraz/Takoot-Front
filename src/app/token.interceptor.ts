/* 
    You may be asking, what is a Token Interceptor?

    Well let me tell ya!

    It is an HTTP Interceptor that attaches JWT tokens to requests to the backend API 
    within an Authorization HTTP header.

    Basically, intercepts an HttpRequest or HttpResponse and handles them.

 */

import { Injectable, OnDestroy } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

// specifying this as able to be injected into other objects
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {
        console.log('TokenInterceptor constructed');
    }

    // intercepts takes in two parameters: (1) the outgoing request to handle, HttpRequest
    // and (2) the next interceptor in the chain
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('HTTP request intercepted!');
        console.log(request);
        // let token equal the jwt item from storage
        let token = window.localStorage.getItem('jwt');
        console.log(token);
        // if the user hits our endpoint and the token is true, attach the JWT
        if (request.url.indexOf(environment.API_URL) >= 0 && token) {
            console.log('Attaching JWT to Authorization header...')
            request = request.clone({
                setHeaders: {
                    Authorization: token,
                    'Content-Type':  'application/json',
                }
            });
            console.log('JWT attached!');
        }
        console.log('Sending HTTP request to HttpHandler')
        return next.handle(request);
    }
}