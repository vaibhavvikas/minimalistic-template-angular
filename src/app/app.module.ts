import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './sidebar/header/header.component'
import { HeaderTitleComponent } from './sidebar/header/header-title/header-title.component';
import { HeaderTitleMobileComponent } from './sidebar/header/header-title-mobile/header-title-mobile.component';
import { ContentsSectionComponent } from './contents-section/contents-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTitleComponent,
    HeaderTitleMobileComponent,
    ContentsSectionComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
