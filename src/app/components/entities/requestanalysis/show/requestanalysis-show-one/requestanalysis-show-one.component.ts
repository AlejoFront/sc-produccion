import { Component, OnInit } from '@angular/core';
import { RequestanalysisService } from 'src/app/services/requestanalysis.services';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Requestanalysis } from 'src/app/model/requestanalysis';
import { RequestAnalysisPK } from 'src/app/model/requestanalysis';
@Component({
  selector: 'app-requestanalysis-show-one',
  templateUrl: './requestanalysis-show-one.component.html',
  styleUrls: ['./requestanalysis-show-one.component.css'],
  providers:[RequestanalysisService]
})
export class RequestanalysisShowOneComponent implements OnInit {

  public requestanalysis: Requestanalysis;
  public requestanalysispk: RequestAnalysisPK;
  public title: String;
  public url: string;
  constructor(
    private _requestanalysisService: RequestanalysisService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {this.title = 'analisis request'}

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let code = params['code'];
      this._requestanalysisService.getRequestanalyse(code).subscribe(
        response => {
          this.requestanalysis = response;
          this.requestanalysispk = response;
        },error => {
          console.log(error);
        }
      )
    })
  }

}
