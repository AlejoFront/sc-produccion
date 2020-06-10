import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Global} from '../services/global'
import { Observable, from, Subject } from 'rxjs';
import { Requeststate } from '../model/requeststatus';
import { RequestAnalysisPK } from '../model/requestanalysis';
import { Productions } from '../model/productions';
@Injectable({
    providedIn: 'root'
})
export class RequestbatchesService {
    public url: string;
    
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    private listbatches = new Subject<string>();

    addRequestbatches(requestbatch):Observable<any>{
        let params= JSON.stringify(requestbatch);
        let headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'/RequestBatches',params,{headers: headers});
    }

    getRequestbatches():Observable<any>{
        return this._http.get(this.url+'/RequestBatches');
    }

    getAllrequeststate():Observable<Requeststate[]>{
        return this._http.get<Requeststate[]>(this.url+'/RequestStatus');
    }

    getAllProductions():Observable<Productions[]>{
        return this._http.get<Productions[]>(this.url+'/Production')
    }

    getAllrequestpk():Observable<RequestAnalysisPK[]>{
        return this._http.get<RequestAnalysisPK[]>(this.url+'/RequestAnalysis');
    }

    getRequestbatch(requestbatchId):Observable<any>{
        return this._http.get(this.url+'RequestBatches/'+requestbatchId);
    }

    updateRequestbatch(code, requestbatch):Observable<any>{
        let params = JSON.stringify(requestbatch);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'RequestBatches/'+code,params,{headers:headers});
    }

    deleteRequestbatch(code):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'RequestBatches/'+code, {headers:headers});
    }

    listabatches(): Observable<string>{
        return this.listbatches.asObservable();
    }

    filter(filterBy: string){
        this.listbatches.next(filterBy);
    }
}