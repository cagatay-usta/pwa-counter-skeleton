import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CigCounterComponent } from './counters/cig-counter/cig-counter.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { CaloriesCounterComponent } from './counters/calories-counter/calories-counter.component';
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ModalComponent } from './components/modal/modal.component';

const appRoutes: Routes = [
  { path: 'cig-counter', component: CigCounterComponent },
  { path: 'cal-counter', component: CaloriesCounterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CigCounterComponent,
    HeaderComponent,
    CaloriesCounterComponent,
    CommonButtonComponent,
    ItemCardComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    // Angular Material
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
