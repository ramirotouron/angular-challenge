import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ballMatrixPrev: [boolean, boolean, boolean, boolean] = [false, false, false, false];
  ballMatrix: [boolean, boolean, boolean, boolean] = [true, false, false, false];

  clickedBox(pos: number) {
    
    this.ballMatrixPrev = [...this.ballMatrix]
    const lastPos = this.ballMatrix.findIndex(box => box == true)
    this.ballMatrix[lastPos] = false
    this.ballMatrix[pos] = true

  }
}
