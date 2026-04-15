import { Component } from '@angular/core';

interface Project {
  title: string;
  tags: string[];
  description: string;
  liveUrl: string;
  icon?: string;
  image?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Shopping Cart',
      tags: ['Angular 19', 'Tailwind CSS', 'Auth', 'Lazy Loading'],
      description:
        'Feature-rich E-commerce application with dynamic product management, secure authentication, multiple payment options, lazy loading, modular architecture, custom pipes, real-time notifications, multi-language support (English & Arabic), and an interactive UI using Angular Signals.',
      liveUrl: 'https://shopping-cart-project-hb5d.vercel.app/home',
      image: '/images/ChatGPT Image Feb 22, 2026, 03_53_41 AM.png',
    },
    {
      title: 'Scooby – Pets Care',
      tags: ['Angular 10', 'Bootstrap', 'Angular Material', 'RxJS'],
      description:
        'Platform crafted to aid individuals in rescuing homeless animals, facilitating responsible pet breeding, and simplifying pet ownership for enthusiasts, with supplementary functionalities to enrich the pet care experience.',
      liveUrl: 'https://66a3dcdc9f41aa2651249739--classy-souffle-562f76.netlify.app/#/login',
     image:'/images/ChatGPT Image Feb 27, 2026, 12_25_21 PM.png'
    },
    {
      title: 'Weather Forecast',
      tags: ['JavaScript', 'API Integration', 'Responsive Design'],
      description:
        'Responsive website to display a 3-day weather forecast for any city entered by the user. Integrated a dynamic search feature with real-time weather updates using external APIs.',
      liveUrl: 'https://menna-mohamed-18.github.io/weather-app/',
     image:'/images/GeminiGeneratedImagekxgyqpkxgyqpkxgy.png'
    },
    {
      title: 'Bookmark Manager',
      tags: ['Vanilla JS', 'CRUD', 'URL Validation'],
      description:
        'CRUD-based bookmark manager with URL validation, duplicate prevention, dynamic table display, and user-friendly controls for managing favorite websites efficiently.',
      liveUrl: 'https://menna-mohamed-18.github.io/crud-system/',
     image:'/images/ChatGPT-Image-Feb-18-2026-020028-PM.png'
    },

  { 
  title: 'PatioTime Bistro', 
  tags: ['HTML/CSS/Js', 'Responsive Design', 'Restaurant UI'], 
  description: 
    'A professionally designed restaurant website featuring a sleek dark theme, responsive mobile menu, and an intuitive layout that highlights menu items and enhances the dining experience online.', 
  liveUrl: 'https://menna-mohamed-18.github.io/resturant-app/', 
  image: '/images/resturant (1).png' 
},

    
   {
  title: 'Candle Store',
  tags: ['Vanilla JS', 'E-commerce', 'Product Showcase'],
  description:
    'An elegant candle store website featuring a curated collection of handcrafted candles with unique scents, presented in a clean grid layout with smooth browsing experience.',
  liveUrl: 'https://menna-mohamed-18.github.io/candels-proj/',
  image: '/images/Capture1i.PNG'
},
 {
  title: 'Family Bakery',
  tags: ['HTML', 'CSS', 'Responsive Design'],
  description:
    'A warm and inviting bakery website showcasing artisan breads, bagels, and cookies with a clean layout, location details, and opening hours for a family-owned bakery.',
  liveUrl: 'https://menna-mohamed-18.github.io/bakery-project/',
  image: '/images/Capturenm.PNG'
},


{
  title: 'Mealify',
  tags: ['HTML', 'CSS', 'Dark Mode'],
  description:
    'A modern restaurant landing page featuring chef profiles, a food gallery, table booking, and a dark mode toggle — all wrapped in a clean and responsive design.',
  liveUrl: 'https://menna-mohamed-18.github.io/mealify-project/',
  image: '/images/Capture melify.PNG'
},
{
  title: 'Daniels Portfolio',
  tags: ['HTML', 'CSS', 'Portfolio'],
  description:
    'A sleek and professional designer portfolio website with a full-screen hero background, smooth navigation, and sections for services, works, clients, and team members.',
  liveUrl: 'https://menna-mohamed-18.github.io/Daniels-project/',
  image: '/images/denials.PNG'
},

{
  title: 'DevFolio',
  tags: ['HTML', 'CSS', 'Typing Effect'],
  description:
    'A bold dark-themed personal portfolio website with a dramatic full-screen hero, animated typing effect, and sections for services, work, blog, and contact.',
  liveUrl: 'https://menna-mohamed-18.github.io/devfolio-project/',
  image: '/images/devolio.PNG'
},

{
  title: 'Fokir Portfolio',
  tags: ['HTML', 'CSS', 'Responsive Design'],
  description:
    'A striking dark-themed personal portfolio with bold red accents, a full-screen hero image, and dedicated sections for services, portfolio, testimonials, blog, and contact.',
  liveUrl: 'https://menna-mohamed-18.github.io/Fokir-project/',
  image: '/images/fokir.PNG'
},
  ];
}
