import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseComponent } from './components/showcase/showcase.component'
import { ContactComponent } from './components/contact/contact.component'


const routes: Routes = [
  { path: '', component: ShowcaseComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }