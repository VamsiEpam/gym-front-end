import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-four-not-four',
  templateUrl: './four-not-four.component.html',
  styleUrls: ['./four-not-four.component.css']
})
export class FourNotFourComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']); // Navigate to the home page or any other desired page
  }

}
