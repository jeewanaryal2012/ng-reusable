/**
 * @fileoverview added by tsickle
 * Generated from: lib/ja-typeahead.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { Component, Input, EventEmitter, Output, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
export class JaTypeaheadComponent {
    constructor() {
        this.fetchData = new EventEmitter();
        this.onSelectItem = new EventEmitter();
        this.checkboxArray = [];
        this.selectedIds = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.jsonData = this.data;
        console.log(this.data);
        /** @type {?} */
        const formGroup = {};
        this.data.forEach((/**
         * @param {?} fc
         * @return {?}
         */
        fc => {
            console.log(fc);
            formGroup[fc.username] = new FormControl('');
        }));
        this.form = new FormGroup(formGroup);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    inputClicked(e) {
        this.fetchData.emit(e);
        this.config.defaultShow = true;
        //this.config.multiSelect = !this.config.multiSelect;
        // setTimeout(() => {
        //   this.jsonData = this.data;
        // }, 800);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    filterTypeahead(e) {
        this.jsonData = this.data;
        /** @type {?} */
        let filtered = this.jsonData.filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event[this.config.displayLabel].toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        }));
        this.jsonData = filtered;
    }
    /**
     * @param {?} event
     * @param {?} id
     * @param {?} itm
     * @return {?}
     */
    itemClicked(event, id, itm) {
        console.log(this.config.multiSelect);
        if (event.target.checked === true) {
            this.selectedIds.push({ id: id, itm: itm, checked: event.target.checked });
            console.log('Selected Ids ', this.selectedIds);
        }
        if (event.target.checked === false) {
            this.selectedIds = this.selectedIds.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => item.id !== id));
        }
        //this.onSelectItem.emit(this.selectedIds);
        if (this.config.multiSelect === true) {
            this.onSelectItem.emit(this.selectedIds);
        }
        else {
            this.onSelectItem.emit(this.selectedIds[this.selectedIds.length - 1]);
        }
    }
    /**
     * @param {?} uc
     * @param {?} i
     * @return {?}
     */
    getCheckState(uc, i) {
        // console.log(uc, i);
        // return uc === 'u' ? true : false;
    }
    /**
     * @param {?} e
     * @param {?} uc
     * @param {?} i
     * @return {?}
     */
    checkboxClicked(e, uc, i) {
        uc = uc === 'u' ? 'c' : 'u';
        this.getCheckState(uc, i);
    }
}
JaTypeaheadComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ja-typeahead',
                template: "<div class=\"multi-typeahead\">\n    <div class=\"input-wrapper\">\n        <div class=\"selected-list\" *ngIf=\"config.multiSelect === false\">\n            <span class=\"chip\" *ngIf=\"selectedIds.length > 0\">\n                {{selectedIds[selectedIds.length - 1].itm[config.displayLabel]}}\n            </span>\n        </div>\n        <div class=\"selected-list\" *ngIf=\"config.multiSelect === true\">\n            <span *ngIf=\"selectedIds.length <= 2\">\n                <span *ngFor=\"let item of selectedIds; let i = index\"\n                    class=\"chip\">{{item.itm[config.displayLabel]}}</span>\n            </span>\n            <span *ngIf=\"selectedIds.length > 2\" class=\"chip\">\n                {{selectedIds.length}}+ items selected\n            </span>\n        </div>\n        <input class=\"search-input\" type=\"text\" (click)=\"inputClicked($event)\" (keyup)=\"filterTypeahead($event)\" />\n        <i class=\"fas\" [ngClass]=\"config.defaultShow === false ? 'fa-angle-down' : 'fa-angle-up'\"\n            (click)=\"config.defaultShow = !config.defaultShow\"></i>\n    </div>\n    <div class=\"search-result\" [hidden]=\"config.defaultShow === false\">\n        <ul>\n            <li *ngFor=\"let item of jsonData; let i = index\">\n                <label class=\"container\">{{item[config.displayLabel]}}\n                    <input [type]=\"config.multiSelect === true ? 'checkbox' : 'radio'\"\n                        [name]=\"config.multiSelect === true ? 'item-'+item.name : 'th_radio'\" #myItem\n                        (change)=\"itemClicked($event, item.id, item)\">\n                    <span class=\"checkmark\" [ngClass]=\"config.multiSelect === true ? '' : 'th-radio'\"></span>\n                </label>\n\n            </li>\n        </ul>\n    </div>\n</div>\n\n<div class=\"overlay\" (click)=\"config.defaultShow = false\"></div>",
                styles: [".multi-typeahead{font-family:Roboto-Light;margin-top:20px;z-index:1;position:absolute}.multi-typeahead .input-wrapper .selected-list{width:300px;border:2px dotted #00f}.multi-typeahead .input-wrapper .selected-list .chip{display:inline-block;margin:2px 2px 2px 4px;border:1px solid #122ce0;color:#122ce0;padding:2px 10px;position:relative}.multi-typeahead .input-wrapper .selected-list .no-border{border:none!important}.multi-typeahead .input-wrapper .search-input{width:300px;border:1px solid silver;height:2rem;font-size:1.4rem;font-weight:300;padding-left:4px;outline:0}.multi-typeahead .input-wrapper i{z-index:1;font-size:2rem;margin-left:-26px;margin-top:0;cursor:pointer}.multi-typeahead .search-result{width:305px;border:1px solid silver}.multi-typeahead ul{margin:4px auto;padding:10px}.multi-typeahead ul li{list-style:none}.multi-typeahead .container{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:Roboto-Light;font-size:1.2rem}.multi-typeahead .container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.multi-typeahead .checkmark{position:absolute;top:0;left:0;height:25px;width:25px;background-color:#eee}.multi-typeahead .container:hover input~.checkmark{background-color:#ccc}.multi-typeahead .container input:checked~.checkmark{background-color:#2196f3}.multi-typeahead .checkmark:after{content:\"\";position:absolute;display:none}.multi-typeahead .container input:checked~.checkmark:after{display:block}.multi-typeahead .container .checkmark:after{left:9px;top:5px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg)}.multi-typeahead .th-radio{border:2px solid #000;border-radius:100%}.overlay{position:fixed;background-color:rgba(0,0,0,0);top:0;left:0;width:100%;height:100%;z-index:0}"]
            }] }
];
/** @nocollapse */
JaTypeaheadComponent.ctorParameters = () => [];
JaTypeaheadComponent.propDecorators = {
    data: [{ type: Input }],
    config: [{ type: Input }],
    fetchData: [{ type: Output }],
    onSelectItem: [{ type: Output }],
    item: [{ type: ViewChildren, args: ['myItem',] }]
};
if (false) {
    /** @type {?} */
    JaTypeaheadComponent.prototype.data;
    /** @type {?} */
    JaTypeaheadComponent.prototype.config;
    /** @type {?} */
    JaTypeaheadComponent.prototype.fetchData;
    /** @type {?} */
    JaTypeaheadComponent.prototype.onSelectItem;
    /** @type {?} */
    JaTypeaheadComponent.prototype.form;
    /** @type {?} */
    JaTypeaheadComponent.prototype.jsonData;
    /** @type {?} */
    JaTypeaheadComponent.prototype.checkboxArray;
    /** @type {?} */
    JaTypeaheadComponent.prototype.item;
    /** @type {?} */
    JaTypeaheadComponent.prototype.selectedIds;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamEtdHlwZWFoZWFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2phLXR5cGVhaGVhZC8iLCJzb3VyY2VzIjpbImxpYi9qYS10eXBlYWhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQWEsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPeEQsTUFBTSxPQUFPLG9CQUFvQjtJQWEvQjtRQVZVLGNBQVMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM3RCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBS3BFLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRW5CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBSWpCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztjQUNqQixTQUFTLEdBQUcsRUFBRTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxFQUFFLENBQUMsRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxD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Ii8vIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEBDb21wb25lbnQoe1xuLy8gICBzZWxlY3RvcjogJ2xpYi1qYS10eXBlYWhlYWQnLFxuLy8gICB0ZW1wbGF0ZTogYFxuLy8gICAgIDxwPlxuLy8gICAgICAgamEtdHlwZWFoZWFkIHdvcmtzITEyM1xuLy8gICAgIDwvcD5cbi8vICAgYCxcbi8vICAgc3R5bGVzOiBbXVxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBKYVR5cGVhaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbi8vICAgY29uc3RydWN0b3IoKSB7IH1cblxuLy8gICBuZ09uSW5pdCgpIHtcbi8vICAgfVxuXG4vLyB9XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItamEtdHlwZWFoZWFkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2phLXR5cGVhaGVhZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2phLXR5cGVhaGVhZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEphVHlwZWFoZWFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YTtcbiAgQElucHV0KCkgY29uZmlnO1xuICBAT3V0cHV0KCkgZmV0Y2hEYXRhOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgb25TZWxlY3RJdGVtOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAganNvbkRhdGE6IGFueTtcblxuICBjaGVja2JveEFycmF5ID0gW107XG4gIEBWaWV3Q2hpbGRyZW4oJ215SXRlbScpIGl0ZW07XG4gIHNlbGVjdGVkSWRzID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuanNvbkRhdGEgPSB0aGlzLmRhdGE7XG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgICBjb25zdCBmb3JtR3JvdXAgPSB7fTtcblxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGZjID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGZjKTtcbiAgICAgIGZvcm1Hcm91cFtmYy51c2VybmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmb3JtR3JvdXApO1xuICB9XG5cbiAgaW5wdXRDbGlja2VkKGUpIHtcbiAgICB0aGlzLmZldGNoRGF0YS5lbWl0KGUpO1xuICAgIHRoaXMuY29uZmlnLmRlZmF1bHRTaG93ID0gdHJ1ZTtcbiAgICAvL3RoaXMuY29uZmlnLm11bHRpU2VsZWN0ID0gIXRoaXMuY29uZmlnLm11bHRpU2VsZWN0O1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgdGhpcy5qc29uRGF0YSA9IHRoaXMuZGF0YTtcbiAgICAvLyB9LCA4MDApO1xuICB9XG5cbiAgZmlsdGVyVHlwZWFoZWFkKGUpIHtcbiAgICB0aGlzLmpzb25EYXRhID0gdGhpcy5kYXRhO1xuICAgIGxldCBmaWx0ZXJlZCA9IHRoaXMuanNvbkRhdGEuZmlsdGVyKChldmVudCkgPT4ge1xuICAgICAgcmV0dXJuIGV2ZW50W3RoaXMuY29uZmlnLmRpc3BsYXlMYWJlbF0udG9Mb3dlckNhc2UoKS5pbmRleE9mKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcbiAgICB9KTtcbiAgICB0aGlzLmpzb25EYXRhID0gZmlsdGVyZWQ7XG4gIH1cblxuICBpdGVtQ2xpY2tlZChldmVudCwgaWQsIGl0bSkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnLm11bHRpU2VsZWN0KTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJZHMucHVzaCh7IGlkOiBpZCwgaXRtOiBpdG0sIGNoZWNrZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkIH0pO1xuICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIElkcyAnLCB0aGlzLnNlbGVjdGVkSWRzKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZElkcyA9IHRoaXMuc2VsZWN0ZWRJZHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCk7XG4gICAgfVxuXG4gICAgLy90aGlzLm9uU2VsZWN0SXRlbS5lbWl0KHRoaXMuc2VsZWN0ZWRJZHMpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLm11bHRpU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLm9uU2VsZWN0SXRlbS5lbWl0KHRoaXMuc2VsZWN0ZWRJZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uU2VsZWN0SXRlbS5lbWl0KHRoaXMuc2VsZWN0ZWRJZHNbdGhpcy5zZWxlY3RlZElkcy5sZW5ndGggLSAxXSk7XG4gICAgfVxuXG4gIH1cblxuICBnZXRDaGVja1N0YXRlKHVjLCBpKSB7XG4gICAgLy8gY29uc29sZS5sb2codWMsIGkpO1xuICAgIC8vIHJldHVybiB1YyA9PT0gJ3UnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG4gIGNoZWNrYm94Q2xpY2tlZChlLCB1YywgaSkge1xuICAgIHVjID0gdWMgPT09ICd1JyA/ICdjJyA6ICd1JztcbiAgICB0aGlzLmdldENoZWNrU3RhdGUodWMsIGkpO1xuICB9XG5cbn1cblxuIl19