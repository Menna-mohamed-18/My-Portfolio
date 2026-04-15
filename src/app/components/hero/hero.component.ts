import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = signal('Full-Stack Developer');

  private roles = ['Full-Stack Developer', 'Angular Developer', '.NET Developer', 'Problem Solver'];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  marqueeSkills = [
    { icon: 'integration_instructions', label: 'ASP.NET Core' },
    { icon: 'database', label: 'SQL Server' },
    { icon: 'settings_ethernet', label: 'REST APIs' },
    { icon: 'brush', label: 'Tailwind CSS' },
    { icon: 'data_object', label: 'Angular 19' },
    { icon: 'code', label: 'TypeScript' },
    { icon: 'storage', label: 'Entity Framework' },
    { icon: 'cloud_done', label: 'C# / OOP' },
  ];

  ngOnInit() {
    this.typeText();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  private typeText() {
    const current = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.typedText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.typedText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      speed = 300;
    }

    this.timer = setTimeout(() => this.typeText(), speed);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1Nl23jOYR-UhHaKNy2DSo9Xe1AzMPbE9H/view?usp=sharing';
    link.download = 'Menna_Mohamed_CV.pdf';
    link.click();
  }
}
