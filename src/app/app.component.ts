import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LinktreeComponent } from './linktree/linktree.component';
import { AboutMeComponent } from './about-me/about-me.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LinktreeComponent, FooterComponent, HeaderComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingPage';
}
