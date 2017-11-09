import { Routes } from '@angular/router';

import { TRUNK_ROUTES } from "./trunk/trunk.routing";

import { TrunkComponent } from "./trunk/trunk.component";

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'Cisowscy.com', pathMatch: 'full' },
    { path: 'Cisowscy.com', component: TrunkComponent, children: TRUNK_ROUTES},
    { path: '**', redirectTo: 'Cisowscy.com'},    
];