import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachinstateShowComponent } from './components/entities/machinestate/show/machinstate-show/machinstate-show.component'
import { MachinestateEditComponent } from './components/entities/machinestate/edit/machinestate-edit/machinestate-edit.component';
import { MachinestateShowOneComponent } from './components/entities/machinestate/show/machinestate-show-one/machinestate-show-one.component';
import { RequeststatusShowComponent } from './components/entities/requeststatus/show/requeststatus-show/requeststatus-show.component';
import { RequeststatusShowOneComponent } from './components/entities/requeststatus/show/requeststatus-show-one/requeststatus-show-one.component';
import { RequeststatusEditComponent } from './components/entities/requeststatus/edit/requeststatus-edit/requeststatus-edit.component';
import { StatebranchofficeShowComponent } from './components/entities/statebranchoffice/show/statebranchoffice-show/statebranchoffice-show.component';
import { StatebranchofficeEditComponent } from './components/entities/statebranchoffice/edit/statebranchoffice-edit/statebranchoffice-edit.component';
import { StatebranchofficeShowOneComponent } from './components/entities/statebranchoffice/show/statebranchoffice-show-one/statebranchoffice-show-one.component';
import { HomeComponent } from './components/home/home.component';
import { RequestanalysisShowComponent } from './components/entities/requestanalysis/show/requestanalysis-show/requestanalysis-show.component';
import { RequestanalysisShowOneComponent } from './components/entities/requestanalysis/show/requestanalysis-show-one/requestanalysis-show-one.component';
import { RequestanalysisEditComponent } from './components/entities/requestanalysis/edit/requestanalysis-edit/requestanalysis-edit.component';
import { BranchofficeShowComponent } from './components/entities/branchoffice/show/branchoffice-show/branchoffice-show.component';
import { BranchofficeShowOneComponent } from './components/entities/branchoffice/show/branchoffice-show-one/branchoffice-show-one.component';
import { BranchofficeEditComponent } from './components/entities/branchoffice/edit/branchoffice-edit/branchoffice-edit.component';
import { RequestbatchesShowComponent } from './components/entities/requestbatches/show/requestbatches-show/requestbatches-show.component';
import { PaneladminComponent } from './components/views/paneladmin/paneladmin.component';
import { PaneluserComponent } from './components/views/paneluser/paneluser.component';
import { RequestbatchesShowOneComponent } from './components/entities/requestbatches/show/requestbatches-show-one/requestbatches-show-one.component';
import { RequestbatchesEditComponent } from './components/entities/requestbatches/edit/requestbatches-edit/requestbatches-edit.component';
import { TimeremainingComponent } from './components/views/panel/timeremaining/timeremaining.component';
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'paneladmin', component: PaneladminComponent},
    {path: 'paneluser', component: PaneluserComponent},
    {path: 'machinestate', component: MachinstateShowComponent},
    {path: 'Machinestate/:code', component: MachinestateEditComponent},
    {path: 'machinestate/show/:code', component: MachinestateShowOneComponent},
    {path: 'requeststatus', component: RequeststatusShowComponent},
    {path: 'Requeststatus/:code', component: RequeststatusEditComponent},
    {path: 'requeststatus/show/:code', component: RequeststatusShowOneComponent},
    {path: 'StateBranchOffice', component: StatebranchofficeShowComponent},
    {path: 'StateBranchOffice/:code', component: StatebranchofficeEditComponent},
    {path: 'StateBranchOffice/show/:code', component: StatebranchofficeShowOneComponent},
    {path: 'requestanalysis', component: RequestanalysisShowComponent},
    {path: 'requestanalysis/show/:code', component: RequestanalysisShowOneComponent},
    {path: 'requestanalysis/:code', component: RequestanalysisEditComponent},
    {path: 'branchoffice', component: BranchofficeShowComponent},
    {path: 'branchoffice/show/:code', component: BranchofficeShowOneComponent},
    {path: 'branchoffice/:code', component: BranchofficeEditComponent},
    {path: 'requestbatches', component: RequestbatchesShowComponent},
    {path: 'requestbatches/show/:code', component: RequestbatchesShowOneComponent},
    {path: 'requestbatches/:code', component: RequestbatchesEditComponent},
    {path: 'paneluser', component: PaneluserComponent},
    {path: 'info', component: TimeremainingComponent}
    
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);