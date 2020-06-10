import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Productions} from '../model/productions'
import {Global} from '../services/global'
export class ProductionsClass{
  constructor(
    public createDate: String,
    public expirationDate: String,
    public startOrderDate: String,
    public time:String,
  ) {}
  
}
 
@Injectable({
    providedIn: 'root'
})

export class ProductionsService {
    
}