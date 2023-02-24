import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@theming-example/themable-components';
import { Themes, ThemeService } from './theme.service';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: 'theming-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);

  protected switchTheme(theme: Themes): void {
    this.themeService.setTheme(theme);
  }
}
