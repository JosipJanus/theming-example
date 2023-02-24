import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
/* eslint-disable @angular-eslint/no-host-metadata-property, @angular-eslint/component-selector */

@Component({
  selector: 'button[example-button]',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {}
