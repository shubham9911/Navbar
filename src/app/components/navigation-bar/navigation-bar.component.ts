/* Angular Component Setup */

// Step 1: Generate a new Angular component
// ng generate component navigation

// Step 2: Define the component structure

// navigation.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class NavigationComponent {
  theme: 'light' | 'dark' = 'light';

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
