import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from 'src/app/search-form/search-form.component';

const routes: Routes = [
  { path: 'search', component: SearchFormComponent},
  {path:'',redirectTo:'search', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class GitRoutingModule { }
