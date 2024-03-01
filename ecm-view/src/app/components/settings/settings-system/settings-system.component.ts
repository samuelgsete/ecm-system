import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Shepherd } from 'src/app/models/shepherd.entity';
import { FindShepherdService } from 'src/app/usecases/shepherd/find-shepherd.service';

@Component({
  selector: 'app-settings-system',
  templateUrl: './settings-system.component.html',
  styleUrls: ['./settings-system.component.css']
})
export class SettingsSystemComponent implements OnInit {

  shepherd!: Shepherd;

  constructor(
    protected readonly title: Title,
    protected readonly findShepherd: FindShepherdService
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Temas disponíveis");
    this.findShepherd.run();
    this.findShepherd.done().subscribe(response => {
      this.shepherd = new Shepherd(response);
    })
  }
}