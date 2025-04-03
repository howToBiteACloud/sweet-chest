import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-confectioner',
    imports: [CommonModule, ButtonComponent],
    templateUrl: './confectioner.component.html',
    styleUrl: './confectioner.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfectionerComponent {}
