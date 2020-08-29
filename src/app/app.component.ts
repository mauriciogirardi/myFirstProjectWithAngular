import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public gameInProgress: boolean = true
  public typeFinish: string

  public endGame(type: string): void {
    this.gameInProgress = false
    this.typeFinish = type
  }

  public startGame(): void {
    this.gameInProgress = true
    this.typeFinish = undefined
  }
}
