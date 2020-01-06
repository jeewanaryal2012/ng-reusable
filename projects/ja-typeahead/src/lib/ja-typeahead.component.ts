// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'lib-ja-typeahead',
//   template: `
//     <p>
//       ja-typeahead works!123
//     </p>
//   `,
//   styles: []
// })
// export class JaTypeaheadComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-ja-typeahead',
  templateUrl: './ja-typeahead.component.html',
  styleUrls: ['./ja-typeahead.component.scss']
})
export class JaTypeaheadComponent implements OnInit {
  @Input() data;
  @Input() config;
  @Output() fetchData: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSelectItem: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  jsonData: any;

  checkboxArray = [];
  @ViewChildren('myItem') item;
  selectedIds = [];

  constructor() {

  }

  ngOnInit() {
    this.jsonData = this.data;
    console.log(this.data);
    const formGroup = {};

    this.data.forEach(fc => {
      console.log(fc);
      formGroup[fc.username] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
  }

  inputClicked(e) {
    this.fetchData.emit(e);
    this.config.defaultShow = true;
    //this.config.multiSelect = !this.config.multiSelect;
    // setTimeout(() => {
    //   this.jsonData = this.data;
    // }, 800);
  }

  filterTypeahead(e) {
    this.jsonData = this.data;
    let filtered = this.jsonData.filter((event) => {
      return event[this.config.displayLabel].toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    });
    this.jsonData = filtered;
  }

  itemClicked(event, id, itm) {
    console.log(this.config.multiSelect);
    if (event.target.checked === true) {
      this.selectedIds.push({ id: id, itm: itm, checked: event.target.checked });
      console.log('Selected Ids ', this.selectedIds);
    }
    if (event.target.checked === false) {
      this.selectedIds = this.selectedIds.filter((item) => item.id !== id);
    }

    //this.onSelectItem.emit(this.selectedIds);

    if (this.config.multiSelect === true) {
      this.onSelectItem.emit(this.selectedIds);
    } else {
      this.onSelectItem.emit(this.selectedIds[this.selectedIds.length - 1]);
    }

  }

  getCheckState(uc, i) {
    // console.log(uc, i);
    // return uc === 'u' ? true : false;
  }
  checkboxClicked(e, uc, i) {
    uc = uc === 'u' ? 'c' : 'u';
    this.getCheckState(uc, i);
  }

}

