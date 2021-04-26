import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    newReleases: any[] = [];
    loading: boolean;
    error: string = '';
    
    constructor(private spotify: SpotifyService) {
        this.loading = true;
        
        this.spotify
            .fetchNewReleases()
            .subscribe(
                (response: any) => {
                    this.newReleases = response;
                    this.loading = false;
                },
                (error: any) => {
                    this.error = error.error.error.message;
                }
            );
    }
}
