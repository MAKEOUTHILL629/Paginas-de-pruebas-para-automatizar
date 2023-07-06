import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicWepPageComponent } from './components/basic-wep-page/basic-wep-page.component';
import { MainComponent } from './components/main/main.component';
import { AtributosElementoComponent } from './components/atributos-elemento/atributos-elemento.component';
import { LocalizadoresComponent } from './components/localizadores/localizadores.component';

const routes: Routes = [
  { path: 'basic-web-page', component: BasicWepPageComponent },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'element-attributes',
    component: AtributosElementoComponent
  },{
    path: 'locators',
    component: LocalizadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
