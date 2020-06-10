import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Global} from '../services/global'
import { Observable, from, Subject } from 'rxjs';
import { StateBranchOffice } from '../model/stateBranchOffice';
@Injectable({
    providedIn: 'root'
})
export class BranchofficeService {
    public url: string;
    
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    addBranchoffice(branchoffice):Observable<any>{
        let params= JSON.stringify(branchoffice);
        let headers = new
        HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'BranchOffice',params,{headers: headers});
    }

    private listbranch = new Subject<string>();

    getBranchoffices():Observable<any>{
        return this._http.get(this.url+'BranchOffice');
    }

    getAllStateBranch():Observable<StateBranchOffice[]>{
        return this._http.get<StateBranchOffice[]>(this.url+'/StateBranchOffice');
    }

    getBranchoffice(branchofficeId):Observable<any>{
        return this._http.get(this.url+'BranchOffice/'+branchofficeId);
    }

    updateBranchoffice(code, branchoffice):Observable<any>{
        let params = JSON.stringify(branchoffice);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'BranchOffice/'+code,params,{headers:headers});
    }

    deleteBranchoffice(code):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'BranchOffice/'+code, {headers:headers});
    }

    listbranches(): Observable<string>{
        return this.listbranch.asObservable();
    }

    filter(filterBy: string){
        this.listbranch.next(filterBy);
    }
}