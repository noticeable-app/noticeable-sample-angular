import { Component, OnDestroy, OnInit } from '@angular/core'

import { config } from '../config'

@Component({
  selector: 'app-page1',
  standalone: true,
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.sass'],
})
export class Page1Component implements OnDestroy, OnInit {
  ngOnInit(): void {
    window.noticeable.render('widget', config.noticeable.newspageEmbedWidgetId, {
      selector: '#noticeable-newspage-embed',
    })
  }

  ngOnDestroy(): void {
    window.noticeable.destroy('widget', config.noticeable.newspageEmbedWidgetId)
  }
}
