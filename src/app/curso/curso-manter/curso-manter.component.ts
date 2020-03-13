import { Component, OnInit } from '@angular/core';
import { Curso } from '../servico/curso';
import { CursoService } from '../servico/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-manter',
  templateUrl: './curso-manter.component.html',
  styleUrls: ['./curso-manter.component.css']
})
export class CursoManterComponent implements OnInit {


  curso: Curso = new Curso();

  incluir(){
   this.cursoService.incluir(this.curso).subscribe(
     retorno => {
       alert(retorno['mensagem']);
      this.navegar();
     }
   );

  }
   navegar(){
     this.router.navigate(['/curso']);
  }

 
  
  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
