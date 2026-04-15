import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isScrolled = signal(false);
  activeSection = signal('hero');
  drawerOpen = signal(false);

  navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  drawerItems = [
    { id: 'hero', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'person' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'experience', label: 'Experience', icon: 'work' },
    { id: 'projects', label: 'Projects', icon: 'rocket_launch' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleDrawer() {
    this.drawerOpen.update((v) => !v);
  }
}
