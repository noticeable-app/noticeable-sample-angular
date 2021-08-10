import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.sass']
})
export class Page1Component implements OnDestroy, OnInit {

  constructor() { }

  ngOnInit(): void {
    noticeable.render('widget', environment.noticeable.newspageEmbedWidgetId, {selector: '#noticeable-newspage-embed'});
  }

  ngOnDestroy(): void {
    noticeable.destroy('widget', environment.noticeable.newspageEmbedWidgetId);
  }

}
