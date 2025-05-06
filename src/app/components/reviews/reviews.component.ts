import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject, combineLatestWith, map } from 'rxjs';

import { Review } from '../../models/review.type';
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

    readonly reviews = this.reviewsService.getReviews();
    readonly reviews$ = this.reviewsService.getReviews$();

    readonly visibleIndex = 1;
    readonly startIndex = 0;

    activeIndex$ = new BehaviorSubject(this.startIndex);

    set activeIndex(value: number) {
        this.activeIndex$.next(value);
    }

    readonly reviewsForRender$ = this.reviews$.pipe(
        combineLatestWith(this.activeIndex$),
        map(([reviews, activeIndex]) => {
            return this.getActiveReviews(activeIndex, reviews);
        }),
    );

    getActiveIndex(activeIndex: number) {
        this.activeIndex =
            (activeIndex + this.startIndex) % this.reviews.length;
    }

    getActiveReviews(activeIndex: number, reviews: Review[]) {
        const lastIndex = reviews.length - 1;

        if (activeIndex === 0) {
            return [
                reviews[lastIndex],
                reviews[activeIndex],
                reviews[activeIndex + 1],
            ];
        }

        if (activeIndex === lastIndex) {
            return [reviews[activeIndex - 1], reviews[activeIndex], reviews[0]];
        }

        return [
            reviews[activeIndex - 1],
            reviews[activeIndex],
            reviews[activeIndex + 1],
        ];
    }
}
