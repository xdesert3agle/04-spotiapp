import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    searchResult: any[] = [];
    loading: boolean;
    
    constructor(private spotify: SpotifyService) {
    }
    
    searchTerm(term: string): void {
        this.loading = true;
        
        this.spotify.fetchSearch(term)
            .subscribe((response: any) => {
                this.searchResult = response;
                this.loading = false;
            });
    }
    
}
