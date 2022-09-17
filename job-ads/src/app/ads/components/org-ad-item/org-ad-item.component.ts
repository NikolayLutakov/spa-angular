import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ad } from 'src/app/ads/models/ad.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-org-ad-item',
  templateUrl: './org-ad-item.component.html',
  styleUrls: ['./org-ad-item.component.scss']
})
export class OrgAdItemComponent implements OnInit {
  @Input() ad: Ad
  hasOrgPermissions: boolean;

  @Output() deleteClicked = new EventEmitter<number>();

  constructor(private authService: AuthService ) {
    
  }
  ngOnInit(): void {
    
  }

  onDelete(): void {
    this.deleteClicked.emit(this.ad.id);
  }
}