import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';
import { SearchComponent } from './components/screens/search/search.component';
import { ArtistComponent } from './components/screens/artist/artist.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
