import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { LOCAL_STORAGE } from './injection-tokens/injection-tokens';

const THEME_TOKEN = 'selected-theme';
export type Themes = 'theme-light' | 'theme-dark' | 'theme-dimmed';

@Injectable()
export class ThemeService {
  private readonly _selectedTheme$ = new ReplaySubject<string>(1);
  public readonly theme$ = this._selectedTheme$.asObservable();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(LOCAL_STORAGE) private readonly localStorage: Storage
  ) {}

  public initalizeTheme(): void {
    const savedTheme = this.localStorage.getItem(THEME_TOKEN) as Themes;

    if (savedTheme !== null) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('theme-light');
    }
  }

  public setTheme(newTheme: Themes): void {
    const rootElement = this.document.documentElement;
    const previousTheme = Array.from(
      this.document.documentElement.classList
    ).find((theme) => theme.startsWith('theme-'));

    if (previousTheme) {
      rootElement.classList.replace(previousTheme, newTheme);
    } else {
      rootElement.classList.add(newTheme);
    }

    this._selectedTheme$.next(newTheme);
    this.localStorage.setItem(THEME_TOKEN, newTheme);
  }
}
