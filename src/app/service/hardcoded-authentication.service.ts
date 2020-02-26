import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log(username + password)
    if(username === 'parthb' && password === 'test') {
      sessionStorage.setItem('loggedInUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('loggedInUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('loggedInUser')
  }

}
