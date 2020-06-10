import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MachinstateCreateComponent } from './components/entities/machinestate/create/machinstate-create/machinstate-create.component';
import { MachinstateShowComponent } from './components/entities/machinestate/show/machinstate-show/machinstate-show.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MachinstateDialogComponent } from './components/entities/machinestate/create/machinstate-dialog/machinstate-dialog.component';
import { MachinestateEditComponent } from './components/entities/machinestate/edit/machinestate-edit/machinestate-edit.component';
import { MachinestateShowOneComponent } from './components/entities/machinestate/show/machinestate-show-one/machinestate-show-one.component';
import { RequeststatusShowComponent } from './components/entities/requeststatus/show/requeststatus-show/requeststatus-show.component';
import { RequeststatusShowOneComponent } from './components/entities/requeststatus/show/requeststatus-show-one/requeststatus-show-one.component';
import { RequeststatusEditComponent } from './components/entities/requeststatus/edit/requeststatus-edit/requeststatus-edit.component';
import { RequeststatusCreateComponent } from './components/entities/requeststatus/create/requeststatus-create/requeststatus-create.component';
import { RequeststatusCreateDialogComponent } from './components/entities/requeststatus/create/requeststatus-create-dialog/requeststatus-create-dialog.component';
import { StatebranchofficeCreateDialogComponent } from './components/entities/statebranchoffice/create/statebranchoffice-create-dialog/statebranchoffice-create-dialog.component';
import { StatebranchofficeCreateComponent } from './components/entities/statebranchoffice/create/statebranchoffice-create/statebranchoffice-create.component';
import { StatebranchofficeEditComponent } from './components/entities/statebranchoffice/edit/statebranchoffice-edit/statebranchoffice-edit.component';
import { StatebranchofficeShowComponent } from './components/entities/statebranchoffice/show/statebranchoffice-show/statebranchoffice-show.component';
import { StatebranchofficeShowOneComponent } from './components/entities/statebranchoffice/show/statebranchoffice-show-one/statebranchoffice-show-one.component';
import { HomeComponent } from './components/home/home.component';
import { RequestanalysisShowComponent } from './components/entities/requestanalysis/show/requestanalysis-show/requestanalysis-show.component';
import { RequestanalysisShowOneComponent } from './components/entities/requestanalysis/show/requestanalysis-show-one/requestanalysis-show-one.component';
import { RequestanalysisEditComponent } from './components/entities/requestanalysis/edit/requestanalysis-edit/requestanalysis-edit.component';
import { RequestanalysisCreateComponent } from './components/entities/requestanalysis/create/requestanalysis-create/requestanalysis-create.component';
import { RequestanalysisCreateDialogComponent } from './components/entities/requestanalysis/create/requestanalysis-create-dialog/requestanalysis-create-dialog.component';
import { BranchofficeCreateDialogComponent } from './components/entities/branchoffice/create/branchoffice-create-dialog/branchoffice-create-dialog.component';
import { BranchofficeCreateComponent } from './components/entities/branchoffice/create/branchoffice-create/branchoffice-create.component';
import { BranchofficeEditComponent } from './components/entities/branchoffice/edit/branchoffice-edit/branchoffice-edit.component';
import { BranchofficeShowComponent } from './components/entities/branchoffice/show/branchoffice-show/branchoffice-show.component';
import { BranchofficeShowOneComponent } from './components/entities/branchoffice/show/branchoffice-show-one/branchoffice-show-one.component';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RequestbatchesShowComponent } from './components/entities/requestbatches/show/requestbatches-show/requestbatches-show.component';
import { RequestbatchesShowOneComponent } from './components/entities/requestbatches/show/requestbatches-show-one/requestbatches-show-one.component';
import { RequestbatchesCreateComponent } from './components/entities/requestbatches/create/requestbatches-create/requestbatches-create.component';
import { RequestbatchesCreateDialogComponent } from './components/entities/requestbatches/create/requestbatches-create-dialog/requestbatches-create-dialog.component';
import { RequestbatchesEditComponent } from './components/entities/requestbatches/edit/requestbatches-edit/requestbatches-edit.component';
import { PaneladminComponent } from './components/views/paneladmin/paneladmin.component';
import { PaneluserComponent } from './components/views/paneluser/paneluser.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BranchofficeService } from './services/branchoffice.services';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BranchofficeComponent } from './components/views/panel/branchoffice/branchoffice.component';
import { RequestbatchesComponent } from './components/views/panel/requestbatches/requestbatches.component';
import { InfoShowComponent } from './components/info/info-show/info-show.component';
import { InfoShowDialogComponent } from './components/info/info-show-dialog/info-show-dialog.component';
import { TimeremainingComponent } from './components/views/panel/timeremaining/timeremaining.component';
import { InfomachineryComponent } from './components/views/panel/infomachinery/infomachinery.component';
import { MachinerydisponibleDialogComponent } from './components/views/panel/listmachinery/disponibles/machinerydisponible-dialog/machinerydisponible-dialog.component';
import { MachinerydisponibleComponent } from './components/views/panel/listmachinery/disponibles/machinerydisponible/machinerydisponible.component';
import { MachineryocupadaComponent } from './components/views/panel/listmachinery/ocupadas/machineryocupada/machineryocupada.component';
import { MachineryocupadaDialogComponent } from './components/views/panel/listmachinery/ocupadas/machineryocupada-dialog/machineryocupada-dialog.component';
import { MachinerymtoDialogComponent } from './components/views/panel/listmachinery/mto/machinerymto-dialog/machinerymto-dialog.component';
import { MachinerymtoComponent } from './components/views/panel/listmachinery/mto/machinerymto/machinerymto.component';
import { MachineryreparacionDialogComponent } from './components/views/panel/listmachinery/reparacion/machineryreparacion-dialog/machineryreparacion-dialog.component';
import { MachineryreparacionComponent } from './components/views/panel/listmachinery/reparacion/machineryreparacion/machineryreparacion.component';
import { OtherinfoComponent } from './components/views/panel/otherinfo/otherinfo.component';
import { HumanresourceComponent } from './components/views/panel/humanresources/humanresource/humanresource.component';
import { HumanresourceDialogComponent } from './components/views/panel/humanresources/humanresource-dialog/humanresource-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MachinstateCreateComponent,
    MachinstateShowComponent,
    MachinstateDialogComponent,
    MachinestateEditComponent,
    MachinestateShowOneComponent,
    RequeststatusShowComponent,
    RequeststatusShowOneComponent,
    RequeststatusEditComponent,
    RequeststatusCreateComponent,
    RequeststatusCreateDialogComponent,
    StatebranchofficeCreateDialogComponent,
    StatebranchofficeCreateComponent,
    StatebranchofficeEditComponent,
    StatebranchofficeShowComponent,
    StatebranchofficeShowOneComponent,
    HomeComponent,
    RequestanalysisShowComponent,
    RequestanalysisShowOneComponent,
    RequestanalysisEditComponent,
    RequestanalysisCreateComponent,
    RequestanalysisCreateDialogComponent,
    BranchofficeCreateDialogComponent,
    BranchofficeCreateComponent,
    BranchofficeEditComponent,
    BranchofficeShowComponent,
    BranchofficeShowOneComponent,
    RequestbatchesShowComponent,
    RequestbatchesShowOneComponent,
    RequestbatchesCreateComponent,
    RequestbatchesCreateDialogComponent,
    RequestbatchesEditComponent,
    PaneladminComponent,
    PaneluserComponent,
    BranchofficeComponent,
    RequestbatchesComponent,
    InfoShowComponent,
    InfoShowDialogComponent,
    TimeremainingComponent,
    InfomachineryComponent,
    MachinerydisponibleDialogComponent,
    MachinerydisponibleComponent,
    MachineryocupadaComponent,
    MachineryocupadaDialogComponent,
    MachinerymtoDialogComponent,
    MachinerymtoComponent,
    MachineryreparacionDialogComponent,
    MachineryreparacionComponent,
    OtherinfoComponent,
    HumanresourceComponent,
    HumanresourceDialogComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
    
  ],
  providers: [BranchofficeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
