import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    NosotrosComponent,
    ServiciosComponent,
    EquipoComponent,
    ContactoComponent,
    PieComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
