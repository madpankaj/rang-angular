import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: Http) { }

  getHomeContent(){
    return this.http.get('../../assets/data.json');
  }
 
}
