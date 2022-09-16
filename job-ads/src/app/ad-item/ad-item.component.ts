import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ad } from 'src/models/ad.model';

@Component({
  selector: 'app-ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.css']
})
export class AdItemComponent {
  @Input() ad: Ad

  //@Output() editClicked = new EventEmitter<>();
}
