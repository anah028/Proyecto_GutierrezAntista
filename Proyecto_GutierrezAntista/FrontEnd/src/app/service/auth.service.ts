import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../Model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../Model/login-usuario';
import { JwtDto } from '../Model/jwt-dto';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL= 'https://backendfinal-l6cx.onrender.com/auth/';
  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL+ 'login', loginUsuario);
  }
  
}
