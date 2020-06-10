import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Global } from 'src/app/services/global';
import { RequeststateService } from 'src/app/services/requeststatus.services';
import { Requeststate } from 'src/app/model/requeststatus';
@Component({
  selector: 'app-requeststatus-show-one',
  templateUrl: './requeststatus-show-one.component.html',
  styleUrls: ['./requeststatus-show-one.component.css'],
  providers: [RequeststateService]
})
export class RequeststatusShowOneComponent implements OnInit {

  public requeststate: Requeststate;
  public title: String;
  public url: string;
  constructor(
    private _requeststateService: RequeststateService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {this.title = 'estado de la maquina' }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this._requeststateService.getRequestState(code).subscribe(
        response => {
          this.requeststate = response;
        },error => {
          console.log(error);
        }
      )
    })
  }

}
