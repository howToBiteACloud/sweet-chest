import { Component } from '@angular/core';

import { CatalogComponent } from './components/catalog/catalog.component';
import { ConfectionerComponent } from './components/confectioner/confectioner.component';
import { OrderByPhotoComponent } from './components/order-by-photo/order-by-photo.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

@Component({
    imports: [
        PreviewComponent,
        CatalogComponent,
        OrderByPhotoComponent,
        ConfectionerComponent,
        ReviewsComponent,
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent {
    title = 'sweet-chest';
}
