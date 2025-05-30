import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
