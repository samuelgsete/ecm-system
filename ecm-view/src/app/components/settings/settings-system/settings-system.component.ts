import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-settings-system',
  templateUrl: './settings-system.component.html',
  styleUrls: ['./settings-system.component.css']
})
export class SettingsSystemComponent implements OnInit {

  constructor(protected readonly title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("Temas disponíveis");
  }
}