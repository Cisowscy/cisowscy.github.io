import { Routes } from '@angular/router';

import { TrunkComponent } from "./trunk.component";
import { FotoPodRozComponent } from './sections/foto-pod-roz/foto-pod-roz.component'
import { LotnictwoComponent } from "./sections/lotnictwo/lotnictwo.component";
import { EwidencjaComponent } from "./sections/ewidencja/ewidencja.component";
import { GronoTekaComponent } from "./sections/grono-teka/grono-teka.component";
import { GenComponent } from "./sections/gen/gen.component";

export const TRUNK_ROUTES: Routes = [
    { path: 'Cisowscy.com', component: TrunkComponent, children:[
        { path: 'foto-pod-roz', component: FotoPodRozComponent },
        { path: 'lotnictwo', component: LotnictwoComponent },
        { path: 'ewidencja', component: EwidencjaComponent},
        { path: 'CISGEN', component: GronoTekaComponent},
        { path: 'DNAETNOGEN', component: GenComponent},
    ]} 
];
