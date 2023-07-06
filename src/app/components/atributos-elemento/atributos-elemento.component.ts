import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos-elemento',
  templateUrl: './atributos-elemento.component.html',
  styleUrls: ['./atributos-elemento.component.css']
})
export class AtributosElementoComponent {
  customAtribut : string = 'en la fuente al cargar'
  originalTitle : string = 'Este solía ser el título'
  title: string = 'un párrafo para comprobar atributos'
  nextid: number = 1;

  changedAtributes(){
    const elentP = document.querySelector('#jsattributes');
    elentP?.setAttribute(`personalizado-${this.nextid}`,`valor-${this.nextid++}`);

  }
}
