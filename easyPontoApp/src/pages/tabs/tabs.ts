import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PontosPage } from '../pontos/pontos';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PontosPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}
