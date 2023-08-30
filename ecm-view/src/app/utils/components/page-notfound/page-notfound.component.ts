import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

interface Image {
  src: string,
  alt: string
}

@Component({
  selector: 'app-page-notfound',
  templateUrl: './page-notfound.component.html',
  styleUrls: ['./page-notfound.component.css']
})
export class PageNotfoundComponent implements OnInit {

  image: Image = {
    src: '/assets/img/svg/page-not-found.svg',
    alt: 'Such Not Found'
  }

  constructor(
    protected readonly router: Router,
    protected readonly titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Página não encontrada 404");
  }
}