import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { CursoManterComponent } from './curso/curso-manter/curso-manter.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'curso',
        component: CursoComponent,
        pathMatch: 'full' 
    },
    {
        path: 'curso/incluir',
        component: CursoManterComponent,
        pathMatch: 'full' 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
