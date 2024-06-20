import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'acl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class AclButtonComponent implements OnInit {
  @Input() btnText!: string
  @Input() btnWidth!: string
  @Input() btnHeight!: string
  @Input() btnType!: string
  @Input() isBtnDisable!: boolean
  @Input() isBtnRound!: boolean
  @Output() clickedBtnResponse = new EventEmitter<boolean>()

  isBtnPrimary!: boolean
  isBtnSeconday!: Boolean
  isBtnDanger!: Boolean

  ngOnInit(): void {
    switch (this.btnType.toLowerCase()) {
      case "primary": {
        this.isBtnPrimary = true
        this.isBtnSeconday = false
        this.isBtnDanger = false
        break
      }
      case "secondary": {
        this.isBtnPrimary = false
        this.isBtnSeconday = true
        this.isBtnDanger = false
        break
      }
      case "danger": {
        this.isBtnPrimary = false
        this.isBtnSeconday = false
        this.isBtnDanger = true
        break
      }
      default: {
        this.isBtnPrimary = false
        this.isBtnSeconday = false
        this.isBtnDanger = false
        break
      }
    }
  }

  onClickBtn(response: boolean) {
    this.clickedBtnResponse.emit(response)
  }

}
