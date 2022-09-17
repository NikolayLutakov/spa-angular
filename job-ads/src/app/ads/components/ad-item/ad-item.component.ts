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

  @Output() likeClicked = new EventEmitter<{adId: number, userId: string}>();
  @Output() applyClicked = new EventEmitter<{adId: number, userId: string}>();
  
  hasOrgPermissions: boolean;
  hasUserPermissions: boolean;
  curentUserId: string
  isLiked: boolean;
  isApplied: boolean

  constructor(private authService: AuthService ) {
    
  }
  ngOnInit(): void {
      this.hasOrgPermissions = this.authService.hasPermissions('organisation');
      this.hasUserPermissions = this.authService.hasPermissions('user');
      this.curentUserId = this.authService.getLoggedUserFromLocalStorage().id;
      this.isLiked = this.ad.userLikes.includes(this.curentUserId);
      this.isApplied = this.ad.applicants.includes(this.curentUserId);
  }

  onLike(): void {
    this.likeClicked.emit({adId: this.ad.id, userId: this.curentUserId});
  }

  onApply(): void {
    this.applyClicked.emit({adId: this.ad.id, userId: this.curentUserId});
  }
}
