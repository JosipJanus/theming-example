import { APP_INITIALIZER } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LOCAL_STORAGE } from './app/injection-tokens/injection-tokens';
import { ThemeService } from './app/theme.service';

function initalizeTheme(themeService: ThemeService): () => Promise<void> {
  return async () => {
    themeService.initalizeTheme();
    return Promise.resolve();
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    ThemeService,
    {
      provide: LOCAL_STORAGE,
      useValue: localStorage,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initalizeTheme,
      multi: true,
      deps: [ThemeService],
    },
  ],
}).catch((err) => console.error(err));
