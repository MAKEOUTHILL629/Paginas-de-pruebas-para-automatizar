import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizadores',
  templateUrl: './localizadores.component.html',
  styleUrls: ['./localizadores.component.css'],
})
export class LocalizadoresComponent implements OnInit {
  ngOnInit(): void {
    const divEspecial = document.querySelector('#div1');
    for (let i = 1; i <= 25; i++) {
      const pNew = document.createElement('p');
      pNew.id = 'p' + i;
      pNew.setAttribute('name', `pNombre${i}`);
      pNew.classList.add('normal');
      const aNew = document.createElement('a');
      aNew.id = 'a' + i;
      aNew.setAttribute('name', `pNombre${i}`);
      aNew.classList.add('normal');
      aNew.innerText = `Este es el texto del párrafo ${String.fromCharCode(
        i + 96
      )}`;

      pNew.appendChild(aNew);
      divEspecial?.appendChild(pNew);
    }
    const nestedDivParent = document.createElement('div');
    nestedDivParent.id = 'div' + 2;
    nestedDivParent.setAttribute('name', `divAnidado`);
    nestedDivParent.classList.add('divAnidado');
    const nestedPParent = document.createElement('p');
    nestedPParent.id = 'p' + 26;
    nestedPParent.setAttribute('name', `pNombre${26}`);
    nestedPParent.classList.add('normal');
    nestedPParent.innerText = 'texto anidado en párrafos';
    nestedDivParent.appendChild(nestedPParent);
    let auxAnterior = nestedDivParent;
    for (let i = 3; i <= 17; i++) {
      const newNestedDivParent = document.createElement('div');
      newNestedDivParent.id = 'div' + i;
      newNestedDivParent.setAttribute('name', `divAnidado`);
      newNestedDivParent.classList.add('divAnidado');
      const newNestedPParent = document.createElement('p');
      newNestedPParent.id = 'p' + (24+i);
      newNestedPParent.setAttribute('name', `pNombre${24+i}`);
      newNestedPParent.classList.add('normal');
      newNestedPParent.innerText = 'texto anidado en párrafos';
      newNestedDivParent.appendChild(newNestedPParent);
      auxAnterior.appendChild(newNestedDivParent)
      auxAnterior = newNestedDivParent;

    }

    divEspecial?.appendChild(nestedDivParent);

    const divLink = document.createElement('div')
    divLink.id = 'div' + 18;
    divLink.setAttribute('name', `linkDivNombre`);
    divLink.classList.add('linkDivNombre');

    const ulList  = document.createElement('ul')
    ulList.id = 'ul' + 1;
    ulList.setAttribute('name', `ulNombre1`);
    ulList.classList.add('normal');


    for(let i = 1 ; i <=25; i++){
      const liNew = document.createElement('li')
      liNew.id = 'li' + i;
      liNew.setAttribute('name', `liNombre${i}`);
      liNew.classList.add('normal');

      const aNew = document.createElement('a')
      aNew.setAttribute('href', `locators#pNombre${(i-1)}`);
      aNew.id = 'a' + (25+i);
      aNew.setAttribute('name', `aNombre${(25+i)}`);
      aNew.classList.add('normal');
      aNew.innerText = 'saltar al párrafo '+ (i-1)

      liNew.appendChild(aNew);
      ulList.appendChild(liNew)
    }
    divLink.appendChild(ulList)
    divEspecial?.appendChild(divLink);


  }
}
