import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
//import { PreciosComponent } from './components/precios/precios.component';
//import { PrivadoComponent } from './components/privado/privado.component';
//import { TemplateComponent } from './components/template/template.component';
//import { DataComponent } from './components/data/data.component';
import { AlumnoComponent } from './components/alumnos/alumno.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { EquiposComponent } from './components/equipos/equipos.component';

//import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    //{ path: 'precio', component: PreciosComponent },
    //{ path: 'privado', component: PrivadoComponent, canActivate: [ AuthGuardService] },
    //{ path: 'template', component: TemplateComponent },
    //{ path: 'data', component: DataComponent },
    { path: 'alumno/:id', component: AlumnoComponent },
    { path: 'alumnos', component: AlumnosComponent },
    { path: 'equipos', component: EquiposComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
