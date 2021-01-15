import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username==="RamGhimire" && password==="ram"){
      return true
    }
    else{
      return false
    }
  }
}
