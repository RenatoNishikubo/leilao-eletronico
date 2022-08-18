import { LeilaoComponent } from './components/pages/leilao/leilao.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LayoutComponent } from './components/layout/layout.component';
import { CadastrarComponent } from './components/pages/cadastrar/cadastrar.component';
import { OfertasComponent } from './components/pages/ofertas/ofertas.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'login', component:LoginComponent},
  { path: 'cadastro', component:CadastrarComponent},
  { path: 'ofertas', component:OfertasComponent},
  { path: 'editar/:id', component:OfertasComponent},
  { path: 'leilao', component:LeilaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
