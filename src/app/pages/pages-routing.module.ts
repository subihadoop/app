import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from 'app/shared/bar-chart/bar-chart.component';
import { AddreportComponent } from './add-report/add-report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundRoutingModule } from './page-not-found/page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { PagesComponent } from './pages.component';
import { reportDetailsComponent } from './report-details/report-details.component';
import { reportsListComponent } from './report-list/report-list.component';
import { LeftNavTemplateComponent } from './template/left-nav-template.component';


const routes: Routes = [
  {
  path: '',
  redirectTo: 'pages',
  pathMatch: 'full'
},

{
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Angular Admin Template'
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Dashboard Page'
      },
    },
    {
      path: 'ui-elements',
      loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule),
      data: {
        title: 'UI Elements'
      },
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      data: {
        title: 'Form Page'
      },
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    },
    {
      path: 'add-report', component: AddreportComponent },
      
   { path: 'report-details',  component: reportDetailsComponent  },
      
    {
      path: 'report-list', component: reportsListComponent  }, 
     // { path: 'report', component: reportsListComponent },
      //{ path: 'report/:id', component: reportDetailsComponent },
     // { path: 'add', component: AddreportComponent }
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
