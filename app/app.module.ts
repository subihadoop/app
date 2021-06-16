import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpService} from './shared/services/http.service';
import {AuthService} from './shared/auth/auth.service';
import {AuthGuardService} from './shared/auth/auth-guard.service';
import {TokenInterceptorService} from './shared/services/token-interceptor.service';
import { UserModule } from './user/user.module';
import { PagesComponent } from './pages/pages.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LeftNavTemplateComponent } from './pages/template/left-nav-template.component';
import { BlankTemplateComponent } from './pages/template/blank-template.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AddreportComponent } from 'app/pages/add-report/add-report.component';
import { reportDetailsComponent } from 'app/pages/report-details/report-details.component';
import { reportsListComponent } from 'app/pages/report-list/report-list.component';
import { OsfilesystemComponent } from 'app/pages/osfilesystem/osfilesystem.component';


@NgModule({
    declarations: [
        PagesComponent,
        LeftNavTemplateComponent,
        HeaderComponent,
        FooterComponent,
        BlankTemplateComponent,
        NavigationComponent,
        AddreportComponent,
        reportDetailsComponent, 
       reportsListComponent,
       OsfilesystemComponent,
       
       ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, // ToastrModule required animations module
        ToastrModule.forRoot(), // ToastrModule added
        FormsModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule
        //UiElementsModule,
       // UserModule

    ],
    providers: [
        HttpService,
        AuthService,
        AuthGuardService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
