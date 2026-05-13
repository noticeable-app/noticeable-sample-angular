import { AfterViewInit, Component, OnDestroy } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

import { config } from './config'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  appTitle = 'My app'

  ngAfterViewInit(): void {
    window.noticeable.render('widget', config.noticeable.iconWidgetId, {
      selector: '#noticeable-icon',
    })
  }

  ngOnDestroy(): void {
    window.noticeable.destroy('widget', config.noticeable.iconWidgetId)
  }
}
