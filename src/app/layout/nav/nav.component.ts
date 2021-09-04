import { Component, HostBinding, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from '@core/service/theme.service';
import { environment } from '@env';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  public version = environment.version;

  public isDarkTheme$: Observable<boolean>;

  navItems = [
    { link: '/home', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' }
  ];
  @Output() public sidenavToggle = new EventEmitter();
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.getDarkTheme();
  }

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  } 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  
}
