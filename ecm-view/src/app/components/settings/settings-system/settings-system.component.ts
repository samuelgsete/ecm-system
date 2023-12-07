import { Component, OnInit } from '@angular/core';

import { ImageModel } from 'src/app/models/image-model.entity';
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
    protected readonly findShepherd: FindShepherdService
  ) {}

  ngOnInit(): void {
    this.findShepherd.run();
    this.findShepherd.done().subscribe(response => {
      this.shepherd = new Shepherd(response);
    })
  }
}