import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  // public isHovered = false;
  // public circleX = '0';
  // public circleY = '0';
  //
  // onMouseEnter(event: MouseEvent): void {
  //   this.isHovered = true;
  //   this.updateCirclePosition(event);
  // }
  //
  // onMouseLeave(event: MouseEvent): void {
  //   this.isHovered = false;
  // }
  //
  // @HostListener('mousemove', ['$event'])
  // onMouseMove(event: MouseEvent): void {
  //   if (this.isHovered) {
  //     this.updateCirclePosition(event);
  //   }
  // }
  //
  // private updateCirclePosition(event: MouseEvent): void {
  //   this.circleX = event.clientX + 'px';
  //   this.circleY = event.clientY + 'px';
  // }

}
