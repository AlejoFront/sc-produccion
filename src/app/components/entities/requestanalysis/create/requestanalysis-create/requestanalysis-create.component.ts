import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requestanalysis } from 'src/app/model/requestanalysis';
import { RequestanalysisService } from 'src/app/services/requestanalysis.services';
import { Requeststate } from 'src/app/model/requeststatus';
import swal from 'sweetalert';
@Component({
  selector: 'app-requestanalysis-create',
  templateUrl: './requestanalysis-create.component.html',
  styleUrls: ['./requestanalysis-create.component.css']
})
export class RequestanalysisCreateComponent implements OnInit {

  public requestanalysis: Requestanalysis;
  listrequeststates: Requeststate[] = [];
  public page_title: String
  public status: String;
  public btn: String;
  constructor(
    private router: Router,
    private requestanalysisService: RequestanalysisService
  ) {
    this.requestanalysis = new Requestanalysis(null, null);
    this.page_title = 'Adicionar analisis de solicitud'
    this.btn = 'Guardar'
  }

  ngOnInit(): void {
    this.getAllrequeststates();
  }
  save() {
    this.requestanalysisService.addRequestanalysis(this.requestanalysis).subscribe(response => {
      if (this.status = 'success') {
        swal(
          'Sucursal creada!!',
          'La sucursal se ha creado correctamente',
          'success'
        );
        this.requestanalysis = response.requestanalysis;
        this.router.navigate(['/RequestAnalysis']);
      } else {
        this.status = 'error';
        swal(
          'Sucursal creada!!',
          'La sucursal se ha creado correctamente',
          'error'
        );
      }
      location.reload(true);
    }, error => {
      console.log(error);
      this.status = 'error'
    })
    console.log(this.requestanalysis);
  }


  getAllrequeststates() {
    this.requestanalysisService.getAllRequeststates().subscribe(
      data => {
        this.listrequeststates = data;
      }
    );
  }


  getAllRequeststatus() {
    this.requestanalysisService.getRequestStates().subscribe(
      data => {
        this.listrequeststates = data;
      }
    );
  }
}
