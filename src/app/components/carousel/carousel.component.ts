import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-carousel',
    imports: [CommonModule],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {}
