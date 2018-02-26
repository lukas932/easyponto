import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app.routing';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CargosModule } from './cargos/cargos.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { LayoutModule } from './layout/layout.module';
import { PontosModule } from './pontos/pontos.module';

// Components
import { AppComponent } from './app.component';

// Services
import { ServiceModule } from './services/index';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Interceptors
import { TokenInterceptor } from './interceptors/token.interceptor';
import { RefreshTokenInterceptor } from './interceptors/refresh-token.interceptor';
import { AplicationErrorHandle } from './app.error-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    CargosModule,
    ColaboradoresModule,
    LayoutModule,
    ServiceModule,
    PontosModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AplicationErrorHandle }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
