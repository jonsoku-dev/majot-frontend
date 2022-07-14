import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-example2222';

  state$ = this.appService.state$.asObservable(); // Observableとして読み取り専用で参照する

  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.state$.subscribe((state) => console.log(state)); // 購読
  }

  setState(state: { hoge: boolean }): void {
    this.appService.state$.next(state); // BehaviorSubjectに新しい値を設定する
  }
}

// jsx
