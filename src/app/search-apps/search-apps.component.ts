// search-apps.component.ts
import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Aplicaciones } from '../core/interfaces/aplicaciones'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-apps',
  templateUrl: './search-apps.component.html',
  styleUrls: ['./search-apps.component.scss'],
})
export class SearchAppsComponent {
  terminoBusqueda: string = '';
  aplicacionesEncontradas: Aplicaciones[] = [];

  constructor(private appService: AppService, private router: Router) {}

  buscarAplicaciones() {
    if (this.terminoBusqueda.trim() !== '') {
      this.aplicacionesEncontradas = this.appService.buscarAplicacion(this.terminoBusqueda);
    } else {
      this.aplicacionesEncontradas = [];
    }
  }

  abrirDetalles(app: Aplicaciones) {
    console.log('Detalles de la aplicación:', app);
    // Redirigir a la ruta asociada con la aplicación
    this.router.navigate([app.ruta]); 
  }
  
}


