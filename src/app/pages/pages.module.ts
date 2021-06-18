import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from 'app/shared/header/header.component';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { BarChartComponent } from 'app/shared/bar-chart/bar-chart.component';
import { LineChartComponent } from 'app/shared/line-chart/line-chart.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { BlankTemplateComponent } from './template/blank-template.component';
import { LeftNavTemplateComponent } from './template/left-nav-template.component';
import { AppComponent } from 'app/app.component';
import { OsfilesystemComponent } from './osfilesystem/osfilesystem.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
