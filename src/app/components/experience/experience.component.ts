import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

interface Experience {
  period: string;
  org: string;
  role: string;
  description: string;
  tags: string[];
  dotColor: string;
  dotGlow: string;
  side: 'left' | 'right';
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      period: 'Oct 2025 – Mar 2026',
      org: 'Information Technology Institute (ITI)',
      role: 'ITI – Full Stack .NET Scholarship',
      description:
        'Completed an intensive 4-month program covering C#, ASP.NET Core, ASP.NET MVC, SQL Server, HTML, CSS, JavaScript, and Angular with hands-on real-world projects.',
      tags: ['C#', 'ASP.NET Core', 'SQL Server', 'Angular', 'Entity Framework'],
      dotColor: '#a8a4ff',
      dotGlow: '#6C63FF',
      side: 'left',
    },
    {
      period: 'Sep 2024 – Mar 2025',
      org: 'Route Academy',
      role: 'Frontend Development Track',
      description:
        'Immersive frontend training focused on HTML5, CSS3, JavaScript, TypeScript, Bootstrap 5, Tailwind CSS, Angular 19, responsive UI, DOM/BOM, AJAX, and real-world projects.',
      tags: ['Angular 19', 'TypeScript', 'Tailwind CSS', 'Bootstrap 5', 'AJAX'],
      dotColor: '#62fae3',
      dotGlow: '#62fae3',
      side: 'right',
    },
    {
      period: 'Aug 2023 – Oct 2023',
      org: 'Information Technology Institute (ITI)',
      role: 'Summer Training – Front-End Fundamentals',
      description:
        'Foundational summer training covering the fundamentals of front-end development including HTML, CSS, JavaScript, and core web development concepts.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Front-End Basics'],
      dotColor: '#675df9',
      dotGlow: '#675df9',
      side: 'left',
    },
  ];

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
