import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../../button/button.component';

@Component({
    selector: 'app-preview-text',
    imports: [CommonModule, ButtonComponent],
    templateUrl: './preview-text.component.html',
    styleUrl: './preview-text.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewTextComponent {}
