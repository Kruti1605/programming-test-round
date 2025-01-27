import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetLayoutFormComponent } from './components/get-layout-form/get-layout-form.component';
import { LayoutTemplatesComponent } from './components/layout-templates/layout-templates.component';

// Define your routes here
const routes: Routes = [
  { path: '', redirectTo: '/fetchlayout', pathMatch: 'full' }, // Redirect root to '/fetchlayout'
  { path: 'fetchlayout', component: GetLayoutFormComponent },
  { path: 'template', component: LayoutTemplatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use 'routes' here
  exports: [RouterModule]
})
export class AppRoutingModule { }
