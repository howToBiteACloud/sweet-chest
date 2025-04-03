import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { PreviewTextComponent } from './preview-text/preview-text.component';

@Component({
    selector: 'app-preview',
    imports: [CommonModule, HeaderComponent, PreviewTextComponent],
    templateUrl: './preview.component.html',
    styleUrl: './preview.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent {}
