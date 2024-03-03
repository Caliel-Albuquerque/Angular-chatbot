import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'icon-arrow-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow-right.component.html',
  styles: ['svg{position: absolute; top: 50%; left: 80%; transform: translate(0%, -50%)}']
})
export class ArrowRightComponent {

}
