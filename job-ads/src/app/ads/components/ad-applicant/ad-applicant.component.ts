import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-ad-applicant',
  templateUrl: './ad-applicant.component.html',
  styleUrls: ['./ad-applicant.component.scss']
})
export class AdApplicantComponent implements OnInit {

  @Input() applicant: User;
  @Input() approvedId: string;

  @Output() approveClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onApprove(): void {
    this.approveClicked.emit(this.applicant.id);
  }
}
