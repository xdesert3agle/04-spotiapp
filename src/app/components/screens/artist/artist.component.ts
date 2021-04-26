import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
    artist: any = {};
    topTracks: any[] = [];
    loading: boolean = true;
    
    constructor(private route: ActivatedRoute,
                private spotify: SpotifyService) {
        this.route.params.subscribe((params: any) => {
            this.getArtistInfo(params.id);
            this.getTopTracks(params.id);
            
            this.loading = false;
        });
    }
    
    getArtistInfo(id: string): void {
        this.spotify
            .fetchArtist(id)
            .subscribe((response: string) => {
                this.artist = response;
            });
    }
    
    getTopTracks(id: string): void {
        this.spotify.fetchArtistTopTracks(id)
            .subscribe((response: any) => {
                this.topTracks = response;
                console.log(this.topTracks);
            });
    }
}
