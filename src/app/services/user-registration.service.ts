import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserRegistrationService {
  API_ENDPOINT = environment.API_ENDPOINT;
  constructor(private httpClient: HttpClient) { console.log(environment.API_ENDPOINT) }

  isUsernameAvailable(username: string) {
    const body = { uname: username };
    console.log('body', body, username);
    return this.httpClient.post(this.API_ENDPOINT + 'user/check', body);
  }

  createUser(username: string, hashValue: string) {
    return this.httpClient.post(this.API_ENDPOINT + 'user/create', { uname: username, hash: hashValue });
  }

}
