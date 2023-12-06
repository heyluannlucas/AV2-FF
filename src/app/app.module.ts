import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponentComponent } from './contador-component/contador-component.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { FormsModule } from '@angular/forms';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './controle-acesso/controle-acesso.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { DadosAlunosComponent } from './dados-alunos/dados-alunos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponentComponent,
    ListItemsComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    AreaLogadaComponent,
    FormLoginComponent,
    DadosAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
