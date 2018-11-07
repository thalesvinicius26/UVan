import { NgModule } from '@angular/core';
import { MapaComponent } from './mapa/mapa';
import { LocalEmbarqueComponent } from './local-embarque/local-embarque';
@NgModule({
	declarations: [
		MapaComponent,
		LocalEmbarqueComponent
	],
	imports: [],
	exports: [
		MapaComponent,
		LocalEmbarqueComponent
	]
})
export class ComponentsModule {}
