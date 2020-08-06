import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [{ path: '', component: AboutComponent },
{ path: 'help', component: HelpComponent, data: { breadcrumb: 'Help' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
