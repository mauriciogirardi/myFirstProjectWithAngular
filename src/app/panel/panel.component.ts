import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core'

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit, OnDestroy {
  public instruction: string = 'Traduza a frase!'
  public frases: Frase[] = FRASES
  public response: string = ''

  public round: number = 0
  public roundFrase: Frase

  public progress: number = 0

  public attempts: number = 3

  @Output() public endGame: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.updateRound()
  }

  ngOnInit(): void {}

  ngOnDestroy() {}

  public updateResponse(res: Event): void {
    this.response = (<HTMLInputElement>res.target).value
  }

  public checkAnswer(): void {
    if (this.roundFrase.fraseBr === this.response) {
      this.round++
      this.progress = this.progress + 100 / this.frases.length
      this.updateRound()

      if (this.round === 5) {
        this.endGame.emit('won')
      }
    } else {
      this.attempts--

      if (this.attempts === -1) {
        this.endGame.emit('gameOver')
      }
    }
  }

  public updateRound(): void {
    this.roundFrase = this.frases[this.round]
    this.response = ''
  }
}
