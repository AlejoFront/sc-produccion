import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Global} from '../services/global';
import { Observable, Subject, from } from 'rxjs';
import { Requeststate  } from '../model/requeststatus';
import { RequestAnalysisPK } from '../model/requestanalysis';
@Injectable({
    providedIn: 'root'
})

export class RequestanalysisService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }


    private listrequestanalysis = new Subject<string>();

    addRequestanalysis(requestanalysis):Observable<any>{
        let requestAnalysisPK = new RequestAnalysisPK(requestanalysis);
        let params= JSON.stringify(requestAnalysisPK);
        let headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'/RequestAnalysis',params,{headers: headers});
    }
    getRequestStates():Observable<any>{
        return this._http.get(this.url+'/RequestStatus');
    }
    getRequestanalysis():Observable<any>{
        return this._http.get(this.url+'/RequestAnalysis');
    }

    getAllRequeststates():Observable<Requeststate[]>{
        return this._http.get<Requeststate[]>(this.url+'/RequestStatus');
    }

    getRequestanalyse(RequestAnalysisCode):Observable<any>{
        return this._http.get(this.url+'RequestAnalysis/'+RequestAnalysisCode);
    }

    updateRequestanalysis(code, requestanalysis):Observable<any>{
        let params = JSON.stringify(requestanalysis);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'RequestAnalysis/'+code,params,{headers:headers});
    }

    deleteRequestanalysis(code):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'RequestAnalysis/'+code, {headers:headers});
    }

    lisrequestanalysis(): Observable<string>{
        return this.listrequestanalysis.asObservable();
    }

    filter(filterBy: string){
        this.listrequestanalysis.next(filterBy);
    }
}