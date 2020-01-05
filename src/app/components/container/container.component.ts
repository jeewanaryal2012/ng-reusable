import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  parentData = [];
  showForm = false;
  config = {
    displayLabel: "name",
    defaultShow: true,
    multiSelect: true,
    limit: 4
  };

  constructor(private _uerService: UserService) {
    this._uerService.getUser().subscribe(res => {
      console.log(res);
      this.parentData = res;
      this.showForm = true;
    }, err => { });
  }

  ngOnInit() {

  }

  getRemoteData(e) {
    console.log(e);
    this._uerService.getUser().subscribe(res => {
      console.log(res);
      this.parentData = res;
    }, err => { });
  }

  getSelectedItem(item) {
    console.log(item);
  }

}
