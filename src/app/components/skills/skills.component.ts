import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface SkillGroup {
  title: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  description: string;
  colClass: string;
  skills: { name: string; icon: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      title: 'Frontend Development',
      icon: 'brush',
      iconColor: '#a8a4ff',
      iconBg: 'rgba(168, 164, 255, 0.1)',
      description: 'Building beautiful, responsive interfaces',
      colClass: 'md:col-span-8',
      skills: [
        { name: 'Angular 2+', icon: 'data_object' },
        { name: 'TypeScript', icon: 'javascript' },
        { name: 'Tailwind CSS', icon: 'css' },
        { name: 'Bootstrap 5', icon: 'grid_view' },
        { name: 'HTML5 / CSS3', icon: 'code' },
        { name: 'SCSS', icon: 'brush' },
        { name: 'RxJS', icon: 'sync_alt' },
        { name: 'jQuery / AJAX', icon: 'bolt' },
      ],
    },
    {
      title: 'Backend (.NET)',
      icon: 'settings_ethernet',
      iconColor: '#ac8aff',
      iconBg: 'rgba(172, 138, 255, 0.1)',
      description: 'Scalable server-side architecture',
      colClass: 'md:col-span-4',
      skills: [
        { name: 'ASP.NET Core', icon: 'integration_instructions' },
        { name: 'ASP.NET MVC', icon: 'account_tree' },
        { name: 'Web APIs', icon: 'api' },
        { name: 'Entity Framework', icon: 'database' },
        { name: 'LINQ', icon: 'filter_alt' },
        { name: 'ADO.NET', icon: 'storage' },
        { name: 'C# / OOP', icon: 'terminal' },
      ],
    },
    {
      title: 'Databases',
      icon: 'database',
      iconColor: '#62fae3',
      iconBg: 'rgba(98, 250, 227, 0.1)',
      description: 'Data management & persistence',
      colClass: 'md:col-span-5',
      skills: [
        { name: 'SQL Server', icon: 'storage' },
        { name: 'MySQL', icon: 'database' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: 'terminal',
      iconColor: '#a8a4ff',
      iconBg: 'rgba(168, 164, 255, 0.1)',
      description: 'Development workflow & collaboration',
      colClass: 'md:col-span-7',
      skills: [
        { name: 'Git & GitHub', icon: 'merge' },
        { name: 'Postman', icon: 'api' },
        { name: 'Figma', icon: 'palette' },
        { name: 'REST APIs', icon: 'cloud_done' },
      ],
    },
  ];
}
