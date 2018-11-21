import { NgModule } from '@angular/core';
import { GoogleMaps } from '@ionic-native/google-maps';

import { MapaComponent } from './mapa/mapa';
@NgModule({
	declarations: [
		MapaComponent
	],
	imports: [],
	exports: [
		MapaComponent
	],
	providers: [
		GoogleMaps
	]
})
export class ComponentsModule {}
