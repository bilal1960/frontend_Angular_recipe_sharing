import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AuthComponent } from './pages/auth/auth.component';
import { AuthServiceService } from './services/Auth/auth-service.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, HomePageComponent, AuthComponent]
})
export class AppComponent {
  title = 'Recette_sharing';

  user:any=null;

  constructor(public authService:AuthServiceService){}

  ngOnInit() {
    this.authService.getUserProfile().subscribe({
    
  });
  this.authService.authSubject.subscribe(
    (auth)=>{
      this.user=auth.user
    }
  )
    
  }
}
