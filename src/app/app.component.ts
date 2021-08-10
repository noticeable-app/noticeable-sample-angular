import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  appTitle = 'My app';

  ngAfterViewInit(): void {
    noticeable.render('widget', environment.noticeable.iconWidgetId, {selector: '#noticeable-icon'});
  }

  ngOnDestroy(): void {
    noticeable.destroy('widget', environment.noticeable.iconWidgetId);
  }

}
