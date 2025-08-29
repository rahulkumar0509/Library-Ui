import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private http = inject(HttpClient);
  private httpOption = new HttpHeaders();
  getBearerToken(){
    // learn the response type
    return this.http.get("https://localhost:8081/v2/Login?username=vcx&password=vcx", { responseType: 'text' as 'json' }).pipe(
      map(response => response)
    );
  }
  getRequest(url: string){
    let token = sessionStorage.getItem('token');
    if(token != null){
      this.httpOption.set('Authorization', 'Bearer ' + token);
    }
    return this.http.get(url, {headers: this.httpOption});
  }
}
