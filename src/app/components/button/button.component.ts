import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'button[appButton]',
    imports: [CommonModule],
    template: '<ng-content></ng-content>',
    styleUrl: './button.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
    },
})
export class ButtonComponent {
    @Input() size: 'm' | 'l' = 'm';
}
