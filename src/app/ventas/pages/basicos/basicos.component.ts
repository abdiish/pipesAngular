import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


  nombreLower: string = 'Spiderman';
  nombreUpper: string = 'BATMAN';
  nombreCompleto: string = 'aLaN CoRtEs';

  constructor() { }

  ngOnInit(): void {
  }

}
