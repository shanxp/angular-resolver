import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'news',
  template: `
    {{news}}
  `,
})

export class NewsComponent {
  public news: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.news = this.route.snapshot.data['news'];
  }
}