import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {
    
    // API config
    readonly API_BEARER = 'Bearer BQBJnCkV0raJcktJhFLx_1gcSlg5E15jwLM0LG1uOy7HXmeRnxFaPxoZlhqIqZodCweYi1TeK8ho_siyvwo';
    
    // Endpoints
    readonly URL_NEW_RELEASES: string = '/browse/new-releases';
    readonly URL_SEARCH_ARTISTS: string = '/search?q={id}&type=artist&limit=20';
    readonly URL_GET_ARTIST: string = '/artists/{id}';
    readonly URL_GET_ARTIST_TOP_TRACKS: string = '/artists/{id}/top-tracks?country={country}';
    
    constructor(private http: HttpClient) {
    }
    
    request(query: string): any {
        const headers = new HttpHeaders({
            Authorization: this.API_BEARER
        });
        
        const url = `https://api.spotify.com/v1${query}`;
        
        return this.http.get(url, { headers });
    }
    
    fetchNewReleases(): any {
        return this.request(this.URL_NEW_RELEASES)
            .pipe(map((response: any) => response.albums.items));
    }
    
    fetchSearch(term: string): any {
        const fmtQuery = this.URL_SEARCH_ARTISTS.replace('{id}', term);
        
        return this.request(fmtQuery)
            .pipe(map((response: any) => response.artists.items));
    }
    
    fetchArtist(id: string): any {
        const fmtQuery = this.URL_GET_ARTIST.replace('{id}', id);
        
        return this.request(fmtQuery);
    }
    
    fetchArtistTopTracks(artistId: string): any {
        const fmtQuery = this.URL_GET_ARTIST_TOP_TRACKS
            .replace('{id}', artistId)
            .replace('{country}', 'es');
    
        return this.request(fmtQuery)
            .pipe(map((response: any) => response.tracks));
    }
}
