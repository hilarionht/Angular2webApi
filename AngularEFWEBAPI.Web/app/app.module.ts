import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';//SE AÑADIO REACTIVEFORM... PAR QUE FUNCIONE DATA
import { HttpModule } from '@angular/http';


import { APP_ROUTING } from './app.routes';
import { AlumnosService } from './services/alumnos.service';
import { EquiposService } from './services/equipos.service';

import { HelloWorldComponent } from './helloworld.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnoComponent } from './components/alumnos/alumno.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { KeysPipe } from './pipes/keys.pipe';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        APP_ROUTING
    ],
    declarations:
    [
        HelloWorldComponent,
        HomeComponent,
        AppComponent,
        NavbarComponent,
        AlumnosComponent,
        AlumnoComponent,
        EquiposComponent,
        KeysPipe
    ],
    providers: [
        AlumnosService,
        EquiposService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }