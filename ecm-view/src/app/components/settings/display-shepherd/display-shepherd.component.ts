import { Component, OnInit } from '@angular/core';
import { Shepherd } from 'src/app/models/shepherd.entity';

import { FindShepherdService } from 'src/app/usecases/shepherd/find-shepherd.service';
import { UpdateShepherdService } from 'src/app/usecases/shepherd/update-shepherd.service';

@Component({
  selector: 'app-display-shepherd',
  templateUrl: './display-shepherd.component.html',
  styleUrls: ['./display-shepherd.component.css']
})
export class DisplayShepherdComponent implements OnInit {

  shepherd!: Shepherd;
  isDefined: boolean = false;

  constructor(
    protected readonly find: FindShepherdService,
    protected readonly update: UpdateShepherdService
  ) {}

  ngOnInit(): void {
    this.find.run();
    this.find.done().subscribe(response => {
      this.isDefined = (response != null) ? true: false;
      this.shepherd = new Shepherd(response);
    })
    this.update.done().subscribe(response => {
      this.find.run();
    })
  }
}