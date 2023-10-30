import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }
  openSnackBar(message: string, duration: number = 2000) {
    console.log("snack bar opened");
    this.snackBar.open(message, 'Close', {
      duration: duration
    });
  }
}
