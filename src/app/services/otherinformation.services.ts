import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Global} from '../services/global'
import { Observable, from, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class OtherinformationService {
    public url: string;
    
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    private listemployee = new Subject<string>();

    gethumanresourceall():Observable<any>{
        return this._http.get(this.url+'HumanResource/TotalEmpleados');
    }

    getprocessall():Observable<any>{
        return this._http.get(this.url+'Process/TotalProcesos');
    }

    getemployee():Observable<any>{
        return this._http.get(this.url+'HumanResource/DarEmpleadosDisponibles');
    }


    list(): Observable<string>{
        return this.listemployee.asObservable();
    }

    filter(filterBy: string){
        this.listemployee.next(filterBy);
    }
}