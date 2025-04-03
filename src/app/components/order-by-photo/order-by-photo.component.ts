import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-order-by-photo',
    imports: [CommonModule, ButtonComponent],
    templateUrl: './order-by-photo.component.html',
    styleUrl: './order-by-photo.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderByPhotoComponent {}
