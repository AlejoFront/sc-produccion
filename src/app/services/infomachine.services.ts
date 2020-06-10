import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Global} from '../services/global'
import { Observable, from, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class InfomachineService {
    public url: string;
    
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    private infomachine = new Subject<string>();

    getmachineall():Observable<any>{
        return this._http.get(this.url+'Machinery/TotalMaquinas');
    }

    getmachinedisponibles():Observable<any>{
        return this._http.get(this.url+'Machinery/TotalDisponibles');
    }

    getmachineocupas():Observable<any>{
        return this._http.get(this.url+'Machinery/TotalOcupados');
    }

    getmachinemto():Observable<any>{
        return this._http.get(this.url+'Machinery/TotalMantenimiento');
    }

    getmachinerep():Observable<any>{
        return this._http.get(this.url+'Machinery/TotalReparacion');
    }



    getmachinedis():Observable<any>{
        return this._http.get(this.url+'Machinery/DarMaquinasPorEstado/1');
    }

    getmachineocupadas():Observable<any>{
        return this._http.get(this.url+'Machinery/DarMaquinasPorEstado/2');
    }

    getmachinerepa():Observable<any>{
        return this._http.get(this.url+'Machinery/DarMaquinasPorEstado/3');
    }

    getmachinemante():Observable<any>{
        return this._http.get(this.url+'Machinery/DarMaquinasPorEstado/4');
    }

    list(): Observable<string>{
        return this.infomachine.asObservable();
    }

    filter(filterBy: string){
        this.infomachine.next(filterBy);
    }
}