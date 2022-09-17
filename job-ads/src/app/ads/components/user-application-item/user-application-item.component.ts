import { Component, Input} from '@angular/core';
import { Ad } from '../../models/ad.model';

@Component({
  selector: 'app-user-application-item',
  templateUrl: './user-application-item.component.html',
  styleUrls: ['./user-application-item.component.scss']
})
export class UserApplicationItemComponent{
  @Input() ad: Ad

}
