import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() item: any = {};
    
    constructor(private router: Router) {
    }
    
    openArtistSheet(): void {
        const artistId: number = this.item.type === 'artist'
            ? this.item.id
            : this.item.artists[0].id;
    
        this.router.navigate(['artist', artistId]);
    }
    
}
