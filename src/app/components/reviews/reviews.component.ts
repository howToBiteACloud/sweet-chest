import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { CarouselComponent } from '../carousel/carousel.component';
import { ReviewsService } from './reviews.service';

@Component({
    selector: 'app-reviews',
    imports: [CommonModule, CarouselComponent],
    templateUrl: './reviews.component.html',
    styleUrl: './reviews.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ReviewsService],
})
export class ReviewsComponent {
    private readonly reviewsService = inject(ReviewsService);

    readonly reviews$ = this.reviewsService.getReviews();
}
