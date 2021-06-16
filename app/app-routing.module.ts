import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AddreportComponent } from './pages/add-report/add-report.component';
import { reportDetailsComponent } from './pages/report-details/report-details.component';
import { reportsListComponent } from './pages/report-list/report-list.component';
import {AuthGuardService} from './shared/auth/auth-guard.service';
const routes: Routes = [
    {
    path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        data: {
          title: 'Main page'
        },canActivate:[AuthGuardService]
    },
        {
        path: '',
        loadChildren:  () => import('./user/user.module').then(m => m.UserModule),
    }
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
