import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CatalogItem } from 'src/app/models/catalog-item.type';

@Injectable({
    providedIn: 'root',
})
export class CatalogService {
    readonly catalog: CatalogItem[] = [
        {
            id: 0,
            name: 'Кремовый замок',
            description: 'Нежный крем любого цвета на выбор, вафельная основа',
            price: 150,
            img: '/cream-castle.svg',
        },
        {
            id: 1,
            name: 'Малиновый рай',
            description: 'Воздушный крем, темная основа и ягода малины',
            price: 150,
            img: '/raspberry-paradise.svg',
        },
        {
            id: 2,
            name: 'Фейерверк',
            description: 'Разноцветные крем, с бисквитной основой',
            price: 150,
            img: '/fireworks.svg',
        },
        {
            id: 3,
            name: 'Шоколадный мир',
            description: 'Ореховая стружка, нежный крем и шоколадная основа',
            price: 150,
            img: '/chocolate-world.svg',
        },
        {
            id: 4,
            name: 'Слезы дракона',
            description: 'Нежный крем любого цвета на выбор, вафельная основа',
            price: 150,
            img: '/tears-of-the-dragon.svg',
        },
        {
            id: 5,
            name: 'Летняя фантазия',
            description: 'Украшения в форме сердец, для любимого человека',
            price: 150,
            img: '/summer-fantasy.svg',
        },
        {
            id: 6,
            name: 'Мыс безумия',
            description: 'Разноцветная основа, стружка и нежный крем',
            price: 150,
            img: '/cape-of-madness.svg',
        },
        {
            id: 7,
            name: 'Облачная сказка',
            description: 'Светлая основа, нежный крем со стружкой сверху',
            price: 150,
            img: '/cloud-fairy-tale.svg',
        },
        {
            id: 8,
            name: 'Темный рыцарь',
            description: 'Тёмная основа, нежный крем и вкусные шарики',
            price: 150,
            img: '/dark-knight.svg',
        },
    ];

    getCatalog(): Observable<CatalogItem[]> {
        return of(this.catalog);
    }
}
