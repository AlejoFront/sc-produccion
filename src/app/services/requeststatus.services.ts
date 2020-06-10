import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import { Observable, from } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class RequeststateService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    addRequestStates(requeststate):Observable<any>{
        let params= JSON.stringify(requeststate);
        let headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'/RequestStatus',params,{headers: headers});
    }

    getRequestStates():Observable<any>{
        return this._http.get(this.url+'/RequestStatus');
    }

    getRequestState(RequestStateCode):Observable<any>{
        return this._http.get(this.url+'RequestStatus/'+RequestStateCode);
    }



    updateRequestState(code, requeststate):Observable<any>{
        let params = JSON.stringify(requeststate);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'RequestStatus/'+code,params,{headers:headers});
    }

    deleteRequeststate(code):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'RequestStatus/'+code, {headers:headers});
    }
}