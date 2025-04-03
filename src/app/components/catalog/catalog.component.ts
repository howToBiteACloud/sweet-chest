import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ButtonComponent } from '../button/button.component';
import { CatalogService } from './catalog.service';

@Component({
    selector: 'app-catalog',
    imports: [CommonModule, ButtonComponent],
    templateUrl: './catalog.component.html',
    styleUrl: './catalog.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
    private readonly catalogService = inject(CatalogService);
    readonly catalog$ = this.catalogService.getCatalog();
}
