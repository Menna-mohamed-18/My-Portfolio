import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  languages = [
    {
      name: 'Arabic',
      level: 'Native',
      percent: '100%',
      badgeClass: 'lang-badge-native',
      barClass: 'lang-bar-secondary',
    },
    {
      name: 'English',
      level: 'Very Good',
      percent: '85%',
      badgeClass: 'lang-badge-good',
      barClass: 'lang-bar-primary',
    },
  ];

  coreStack = ['ASP.NET Core', 'Angular', 'Entity Framework', 'SQL Server', 'TypeScript', 'C#'];
}
