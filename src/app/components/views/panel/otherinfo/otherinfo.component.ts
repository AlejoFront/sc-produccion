import { Component, OnInit } from '@angular/core';
import { OtherinformationService } from 'src/app/services/otherinformation.services';
@Component({
  selector: 'app-otherinfo',
  templateUrl: './otherinfo.component.html',
  styleUrls: ['./otherinfo.component.css']
})
export class OtherinfoComponent implements OnInit {

  public employes: number
  public process: number
  constructor(
    private otherinfoservice: OtherinformationService
  ) { }

  ngOnInit(): void {
    this.getAllemployes();
    this.getProcess();
  }

  getAllemployes(){
    this.otherinfoservice.gethumanresourceall().subscribe(response => {
      this.employes = response;
    })
  }

  getProcess(){
    this.otherinfoservice.getprocessall().subscribe(response => {
      this.process = response;
    })
  }

}
