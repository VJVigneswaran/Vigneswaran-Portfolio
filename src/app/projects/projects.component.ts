import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  projects = [
    { 
      title: 'Random Quote Generator', 
      description: 'A simple app to generate random quotes.', 
      link: 'https://vjvigneswaran.github.io/Random-Quote-Generator/', 
      image: 'assets/images/project1.png' 
    },
    { 
      title: 'Todo App', 
      description: 'Our app is designed to help you manage your weekly reminders effortlessly.', 
      link: 'https://github.com/VJVigneswaran/Todo-App', 
      image: 'assets/images/project2.png' 
    },
    {
      title: 'Portfolio', 
      description: 'This is my Personal portfolio website ', 
      link: 'https://vigneswaran-portfolio.netlify.app/', 
      image: 'assets/images/project3.png' 
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  toggleCard(project: any) {
    // Add logic to toggle between front and back of the card
    console.log(project);
  }
}