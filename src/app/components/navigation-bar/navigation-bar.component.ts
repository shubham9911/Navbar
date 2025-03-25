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
  navigationTabs: string[] = [
    'Opportunity for Improvement',
    'Project',
    'Priority',
    'Category',
    'Tracker',
  ];

  detailTabs: string[] = ['Details', 'Activity Log'];
  selectedTab: string[] = ['Tagged Content'];

  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  ngOnInit() {}
}
