import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

interface Skill {
  name: string;
  icon: string;
  percentage: number;
  color: string;
  category: 'Technical Skills' | 'Development Tools';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {
  educations: Education[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Madras University',
      year: '2020 - 2023',
      description: 'CGPA - 8.04'
    },
    {
      degree: 'HSC - Computer Science',
      institution: 'GBHS(Government Boys Higher Secondary School), Chrompet',
      year: '2018-2020',
      description: 'PERCENTAGE - 57%'
    }
  ];
  
  skills: Skill[] = [
    {
      name: 'HTML',
      icon: 'fab fa-html5',
      percentage: 90,
      color: '#E34F26',
      category: 'Technical Skills'
    },
    {
      name: 'CSS',
      icon: 'fab fa-css3-alt',
      percentage: 85,
      color: '#1572B6',
      category: 'Technical Skills'
    },
    {
      name: 'Bootstrap',
      icon: 'fab fa-bootstrap',
      percentage: 80,
      color: '#563D7C',
      category: 'Technical Skills'
    },
    {
      name: 'JavaScript',
      icon: 'fab fa-js',
      percentage: 75,
      color: '#F7DF1E',
      category: 'Technical Skills'
    },
    {
      name: 'Angular',
      icon: 'fab fa-angular',
      percentage: 70,
      color: '#DD0031',
      category: 'Technical Skills'
    },
    {
      name: 'Node.js',
      icon: 'fab fa-node',
      percentage: 65,
      color: '#339933',
      category: 'Technical Skills'
    },
    {
      name: 'Visual Studio Code',
      icon: 'fas fa-code',
      percentage: 80,
      color: '#007ACC',
      category: 'Development Tools'
    },
    {
      name: 'Git',
      icon: 'fab fa-git',
      percentage: 70,
      color: '#F05032',
      category: 'Development Tools'
    },
    {
      name: 'Sublime Text',
      icon: 'fas fa-pencil-alt',
      percentage: 75,
      color: '#FF9800',
      category: 'Development Tools'
    },
    {
      name: 'Firebase',
      icon: 'fas fa-fire',
      percentage: 70,
      color: '#FFCA28',
      category: 'Development Tools'
    },
    {
      name: 'ChatGPT',
      icon: 'fas fa-robot',
      percentage: 0,
      color: '#00C853',
      category: 'Development Tools'
    }
  ];
}
