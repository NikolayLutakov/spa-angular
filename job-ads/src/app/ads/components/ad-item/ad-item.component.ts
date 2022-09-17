import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ad } from 'src/app/ads/models/ad.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.scss']
})
export class AdItemComponent implements OnInit {
  @Input() ad: Ad

  @Output() deleteClicked = new EventEmitter<number>();

  hasOrgPermissions: boolean;
  hasUserPermissions: boolean;

  constructor(private authService: AuthService ) {
    
  }
  ngOnInit(): void {
      this.hasOrgPermissions = this.authService.hasPermissions('organisation');
      this.hasUserPermissions = this.authService.hasPermissions('user');
  }

  onDelete(): void {
    this.deleteClicked.emit(this.ad.id);
  }
}
