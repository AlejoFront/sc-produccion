import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Global } from 'src/app/services/global';
import { MachinestateService } from 'src/app/services/machinestate.services';
import { Machinestate } from 'src/app/model/machinestate';

@Component({
  selector: 'app-machinestate-show-one',
  templateUrl: './machinestate-show-one.component.html',
  styleUrls: ['./machinestate-show-one.component.css'],
  providers: [MachinestateService]
})
export class MachinestateShowOneComponent implements OnInit {
  public machinestate: Machinestate;
  public url: string;
  constructor(
    private _macinestateService: MachinestateService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = Global.url;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this._macinestateService.getMachineState(code).subscribe(
        response => {
          this.machinestate = response;
        },error => {
          console.log(error);
        }
      )
    })
  }

}
