import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { StateBranchOfficeService } from 'src/app/services/statebranchoffice.services';
import { StateBranchOffice } from 'src/app/model/stateBranchOffice';


@Component({
  selector: 'app-statebranchoffice-show-one',
  templateUrl: './statebranchoffice-show-one.component.html',
  styleUrls: ['./statebranchoffice-show-one.component.css'],
  providers: [StateBranchOfficeService]
})
export class StatebranchofficeShowOneComponent implements OnInit {

  public statebranchoffice: StateBranchOffice;
  public title: String;
  public url: string;
  constructor(
    private _statebranchofficeService: StateBranchOfficeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {this.title = 'estado de la sucursal' }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this._statebranchofficeService.getStateBranchOffice(code).subscribe(
        response => {
          this.statebranchoffice = response;
        },error => {
          console.log(error);
        }
      )
    })
  }

}
