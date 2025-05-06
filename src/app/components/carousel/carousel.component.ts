import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-carousel',
    imports: [CommonModule],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
    activeIndex = 0;

    @Input({ required: true }) rewiewsLength!: number;

    @Output() activeIndexChange = new EventEmitter<number>();

    next() {
        this.activeIndex = (this.activeIndex + 1) % this.rewiewsLength;
        this.activeIndexChange.emit(this.activeIndex);
    }

    prev() {
        this.activeIndex =
            (this.rewiewsLength + this.activeIndex - 1) % this.rewiewsLength;
        this.activeIndexChange.emit(this.activeIndex);
    }
}
