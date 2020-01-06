import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class JaTypeaheadComponent implements OnInit {
    data: any;
    config: any;
    fetchData: EventEmitter<string>;
    onSelectItem: EventEmitter<any>;
    form: FormGroup;
    jsonData: any;
    checkboxArray: any[];
    item: any;
    selectedIds: any[];
    constructor();
    ngOnInit(): void;
    inputClicked(e: any): void;
    filterTypeahead(e: any): void;
    itemClicked(event: any, id: any, itm: any): void;
    getCheckState(uc: any, i: any): void;
    checkboxClicked(e: any, uc: any, i: any): void;
}
