import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Global} from '../services/global'
import { Observable, from, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class TimeremainingService {
    public url: string;
    
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    private listtimeremainin = new Subject<string>();

    getTimeRemaining():Observable<any>{
        return this._http.get(this.url+'Production/TiempoRestante');
    }

    listremainintimes(): Observable<string>{
        return this.listtimeremainin.asObservable();
    }

    filter(filterBy: string){
        this.listtimeremainin.next(filterBy);
    }

}