import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SearchAppsComponent } from 'src/app/search-apps/search-apps.component'; // Asegúrate de tener la ruta correcta


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [
  Tab2Page,
  SearchAppsComponent, // Asegúrate de agregar SearchAppsComponent aquí
  ]

})
export class Tab2PageModule {}
