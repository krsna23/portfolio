import { NgModule } from '@angular/core';
import { FeaturesModule } from './features/features.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './features/projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './Home/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "./shared/shared.module";

// import { NgxLiteYoutubeModule } from 'ngx-lite-video';

const routes: Routes = []

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        ProjectsComponent 
    ],
    exports: [ContentComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        FeaturesModule,
        HttpClientModule
        ]
    }
)
export class AppModule { }
