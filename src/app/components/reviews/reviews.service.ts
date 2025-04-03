import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Review } from '../../models/review.type';

@Injectable()
export class ReviewsService {
    readonly reviews: Review[] = [
        {
            id: 0,
            name: 'Ирина Ларионова',
            city: 'Санкт-Петербург',
            title: 'Результат дико порадовал, друзья были в восторге',
            review: 'Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!)',
            photo: '/review-0.svg',
        },
        {
            id: 1,
            name: 'Елена Демидова',
            city: 'Санкт-Петурбург',
            title: '«Лучшую фразу из отзыва напишите в заголовке»',
            review: '',
            photo: '/review-1.svg',
        },
        {
            id: 2,
            name: 'Иван Демидов',
            city: 'Краснодар',
            title: 'Спасибо за прекрасные капкейки, все на высоте',
            review: '',
            photo: '/review-0.svg',
        },
        {
            id: 3,
            name: '',
            city: '',
            title: '',
            review: '',
            photo: '/review-0.svg',
        },
        {
            id: 4,
            name: '',
            city: '',
            title: '',
            review: '',
            photo: '/review-0.svg',
        },
    ];

    getReviews(): Observable<Review[]> {
        return of(this.reviews);
    }
}
