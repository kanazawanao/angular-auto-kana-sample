import { Component } from '@angular/core';
import * as historyKana from 'historykana';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auto-kana-sample';

  history: string[] = [];
  kana = '';

  history2: string[] = [];
  kana2 = '';

  constructor(private appService: AppService) {}
  public onInput(value: string) {
    if (value === '') {
      this.history = [];
    } else {
      this.history.push(value);
    }
    this.kana = historyKana(this.history);
  }

  public onInput2(value: string) {
    if (value === '') {
      this.history2 = [];
    } else {
      this.history2.push(value);
    }
    this.kana2 = this.appService.hiraToKana(historyKana(this.history2));
  }
}
