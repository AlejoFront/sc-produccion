import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Global } from 'src/app/services/global';
import { BranchofficeService } from 'src/app/services/branchoffice.services'
import { Branchoffice } from 'src/app/model/branchoffice';
import { StateBranchOffice } from 'src/app/model/stateBranchOffice';
@Component({
  selector: 'app-branchoffice-show-one',
  templateUrl: './branchoffice-show-one.component.html',
  styleUrls: ['./branchoffice-show-one.component.css']
})
export class BranchofficeShowOneComponent implements OnInit {

  public branchoffice: Branchoffice;
  public stateBranchOffice: StateBranchOffice;
  public description: number;
  public url: string;
  public title: String;
  constructor(
    private _branchofficeService: BranchofficeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = Global.url;
    this.title = 'sucursal';
    this.description = null;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this._branchofficeService.getBranchoffice(code).subscribe(
        response => {
          this.branchoffice = response;
        },error => {
          console.log(error);
        }
      )
    })
  }

}
