import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CounterAppStore } from './core/stores/counter-store.token';
import { createCounterStore } from './core/stores/create-counter-store';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: CounterAppStore,
            useFactory: createCounterStore,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
