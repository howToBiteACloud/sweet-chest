import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-photos',
    imports: [CommonModule],
    templateUrl: './photos.component.html',
    styleUrl: './photos.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotosComponent {}
