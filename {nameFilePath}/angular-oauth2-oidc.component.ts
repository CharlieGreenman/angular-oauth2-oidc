import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'angular-oauth2-oidc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}