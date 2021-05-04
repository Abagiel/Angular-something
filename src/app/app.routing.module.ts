import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TreePageComponent } from './pages/tree-page/tree-page.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent
	},
	{
		path: 'workspace',
		component: TreePageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
