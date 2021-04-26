import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { HomeComponent } from './components/screens/home/home.component';
import { SearchComponent } from './components/screens/search/search.component';
import { ArtistComponent } from './components/screens/artist/artist.component';
import { NavbarComponent } from './components/screens/shared/navbar/navbar.component';

// Módulos
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/elements/card/card.component';
import { LoadingComponent } from './components/screens/shared/loading/loading.component';

// Pipes

import { SafeDomainPipe } from './pipes/safe-domain.pipe';
import { ImageManagerPipe } from './pipes/image-manager.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        ArtistComponent,
        NavbarComponent,
        CardComponent,
        LoadingComponent,
        ImageManagerPipe,
        SafeDomainPipe,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
