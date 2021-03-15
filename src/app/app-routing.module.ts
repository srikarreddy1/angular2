import { BookEditComponent } from './book-edit/book-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookAllComponent } from './book-all/book-all.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuebooksComponent} from './issuebooks/issuebooks.component';

const routes: Routes = [
  {path: 'all', component: BookAllComponent},
  {path: 'add', component: BookCreateComponent},
  {path: 'edit/:id', component: BookEditComponent},
  {path:'issue',component:IssuebooksComponent},
  {path: '', redirectTo: 'all', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
