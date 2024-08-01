import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-wizards';
  a=5;
  b=5;
  resultat = 25;
   

  addition() {
    return 5 + 5;
  }
  multiplication(a: number, b: number) {
    return a*b;
  }
}
