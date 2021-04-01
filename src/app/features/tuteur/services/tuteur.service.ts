import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TuteurService {

  constructor(private _http:HttpClient) { }
   
  addDisponibilite(range:any,dates:any){
    var body={range:range,dates:dates};
    console.log(body);
    return this._http.post<any>(environment.apiUrl+'/tuteur/addDisponibilite',body).toPromise();
  }

  getPeriodes(){
    return this._http.get<any>(environment.apiUrl+'/tuteur/getPeriodes').toPromise();
  }

  getDatesByPeriodeID(PeriodeID:number){
    return this._http.get<any>(environment.apiUrl+'/tuteur/getDatesByPeriodeID/'+PeriodeID).toPromise();
  }

  getSessionsByDateID(DateID:number){
    return this._http.get<any>(environment.apiUrl+'/tuteur/getSessionsByDateID/'+DateID).toPromise();
  }
  
}