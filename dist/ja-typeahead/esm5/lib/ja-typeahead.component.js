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
var JaTypeaheadComponent = /** @class */ (function () {
    function JaTypeaheadComponent() {
        this.fetchData = new EventEmitter();
        this.onSelectItem = new EventEmitter();
        this.checkboxArray = [];
        this.selectedIds = [];
    }
    /**
     * @return {?}
     */
    JaTypeaheadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.jsonData = this.data;
        console.log(this.data);
        /** @type {?} */
        var formGroup = {};
        this.data.forEach((/**
         * @param {?} fc
         * @return {?}
         */
        function (fc) {
            console.log(fc);
            formGroup[fc.username] = new FormControl('');
        }));
        this.form = new FormGroup(formGroup);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    JaTypeaheadComponent.prototype.inputClicked = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.fetchData.emit(e);
        this.config.defaultShow = true;
        //this.config.multiSelect = !this.config.multiSelect;
        // setTimeout(() => {
        //   this.jsonData = this.data;
        // }, 800);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    JaTypeaheadComponent.prototype.filterTypeahead = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        this.jsonData = this.data;
        /** @type {?} */
        var filtered = this.jsonData.filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event[_this.config.displayLabel].toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        }));
        this.jsonData = filtered;
    };
    /**
     * @param {?} event
     * @param {?} id
     * @param {?} itm
     * @return {?}
     */
    JaTypeaheadComponent.prototype.itemClicked = /**
     * @param {?} event
     * @param {?} id
     * @param {?} itm
     * @return {?}
     */
    function (event, id, itm) {
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
            function (item) { return item.id !== id; }));
        }
        //this.onSelectItem.emit(this.selectedIds);
        if (this.config.multiSelect === true) {
            this.onSelectItem.emit(this.selectedIds);
        }
        else {
            this.onSelectItem.emit(this.selectedIds[this.selectedIds.length - 1]);
        }
    };
    /**
     * @param {?} uc
     * @param {?} i
     * @return {?}
     */
    JaTypeaheadComponent.prototype.getCheckState = /**
     * @param {?} uc
     * @param {?} i
     * @return {?}
     */
    function (uc, i) {
        // console.log(uc, i);
        // return uc === 'u' ? true : false;
    };
    /**
     * @param {?} e
     * @param {?} uc
     * @param {?} i
     * @return {?}
     */
    JaTypeaheadComponent.prototype.checkboxClicked = /**
     * @param {?} e
     * @param {?} uc
     * @param {?} i
     * @return {?}
     */
    function (e, uc, i) {
        uc = uc === 'u' ? 'c' : 'u';
        this.getCheckState(uc, i);
    };
    JaTypeaheadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ja-typeahead',
                    template: "<div class=\"multi-typeahead\">\n    <div class=\"input-wrapper\">\n        <div class=\"selected-list\" *ngIf=\"config.multiSelect === false\">\n            <span class=\"chip\" *ngIf=\"selectedIds.length > 0\">\n                {{selectedIds[selectedIds.length - 1].itm[config.displayLabel]}}\n            </span>\n        </div>\n        <div class=\"selected-list\" *ngIf=\"config.multiSelect === true\">\n            <span *ngIf=\"selectedIds.length <= 2\">\n                <span *ngFor=\"let item of selectedIds; let i = index\"\n                    class=\"chip\">{{item.itm[config.displayLabel]}}</span>\n            </span>\n            <span *ngIf=\"selectedIds.length > 2\" class=\"chip\">\n                {{selectedIds.length}}+ items selected\n            </span>\n        </div>\n        <input class=\"search-input\" type=\"text\" (click)=\"inputClicked($event)\" (keyup)=\"filterTypeahead($event)\" />\n        <i class=\"fas\" [ngClass]=\"config.defaultShow === false ? 'fa-angle-down' : 'fa-angle-up'\"\n            (click)=\"config.defaultShow = !config.defaultShow\"></i>\n    </div>\n    <div class=\"search-result\" [hidden]=\"config.defaultShow === false\">\n        <ul>\n            <li *ngFor=\"let item of jsonData; let i = index\">\n                <label class=\"container\">{{item[config.displayLabel]}}\n                    <input [type]=\"config.multiSelect === true ? 'checkbox' : 'radio'\"\n                        [name]=\"config.multiSelect === true ? 'item-'+item.name : 'th_radio'\" #myItem\n                        (change)=\"itemClicked($event, item.id, item)\">\n                    <span class=\"checkmark\" [ngClass]=\"config.multiSelect === true ? '' : 'th-radio'\"></span>\n                </label>\n\n            </li>\n        </ul>\n    </div>\n</div>\n\n<div class=\"overlay\" (click)=\"config.defaultShow = false\"></div>",
                    styles: [".multi-typeahead{font-family:Roboto-Light;margin-top:20px;z-index:1;position:absolute}.multi-typeahead .input-wrapper .selected-list{width:300px;border:2px dotted #00f}.multi-typeahead .input-wrapper .selected-list .chip{display:inline-block;margin:2px 2px 2px 4px;border:1px solid #122ce0;color:#122ce0;padding:2px 10px;position:relative}.multi-typeahead .input-wrapper .selected-list .no-border{border:none!important}.multi-typeahead .input-wrapper .search-input{width:300px;border:1px solid silver;height:2rem;font-size:1.4rem;font-weight:300;padding-left:4px;outline:0}.multi-typeahead .input-wrapper i{z-index:1;font-size:2rem;margin-left:-26px;margin-top:0;cursor:pointer}.multi-typeahead .search-result{width:305px;border:1px solid silver}.multi-typeahead ul{margin:4px auto;padding:10px}.multi-typeahead ul li{list-style:none}.multi-typeahead .container{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:Roboto-Light;font-size:1.2rem}.multi-typeahead .container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.multi-typeahead .checkmark{position:absolute;top:0;left:0;height:25px;width:25px;background-color:#eee}.multi-typeahead .container:hover input~.checkmark{background-color:#ccc}.multi-typeahead .container input:checked~.checkmark{background-color:#2196f3}.multi-typeahead .checkmark:after{content:\"\";position:absolute;display:none}.multi-typeahead .container input:checked~.checkmark:after{display:block}.multi-typeahead .container .checkmark:after{left:9px;top:5px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg)}.multi-typeahead .th-radio{border:2px solid #000;border-radius:100%}.overlay{position:fixed;background-color:rgba(0,0,0,0);top:0;left:0;width:100%;height:100%;z-index:0}"]
                }] }
    ];
    /** @nocollapse */
    JaTypeaheadComponent.ctorParameters = function () { return []; };
    JaTypeaheadComponent.propDecorators = {
        data: [{ type: Input }],
        config: [{ type: Input }],
        fetchData: [{ type: Output }],
        onSelectItem: [{ type: Output }],
        item: [{ type: ViewChildren, args: ['myItem',] }]
    };
    return JaTypeaheadComponent;
}());
export { JaTypeaheadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamEtdHlwZWFoZWFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2phLXR5cGVhaGVhZC8iLCJzb3VyY2VzIjpbImxpYi9qYS10eXBlYWhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQWEsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQ7SUFrQkU7UUFWVSxjQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUtwRSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUVuQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUlqQixDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUNqQixTQUFTLEdBQUcsRUFBRTtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELDJDQUFZOzs7O0lBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQy9CLHFEQUFxRDtRQUNyRCxxQkFBcUI7UUFDckIsK0JBQStCO1FBQy9CLFdBQVc7SUFDYixDQUFDOzs7OztJQUVELDhDQUFlOzs7O0lBQWYsVUFBZ0IsQ0FBQztRQUFqQixpQkFNQztRQUxDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7WUFDdEIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsS0FBSztZQUN4QyxPQUFPLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLENBQUMsRUFBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFFRCwwQ0FBVzs7Ozs7O0lBQVgsVUFBWSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUc7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsRUFBQyxDQUFDO1NBQ3RFO1FBRUQsMkNBQTJDO1FBRTNDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO0lBRUgsQ0FBQzs7Ozs7O0lBRUQsNENBQWE7Ozs7O0lBQWIsVUFBYyxFQUFFLEVBQUUsQ0FBQztRQUNqQixzQkFBc0I7UUFDdEIsb0NBQW9DO0lBQ3RDLENBQUM7Ozs7Ozs7SUFDRCw4Q0FBZTs7Ozs7O0lBQWYsVUFBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkEvRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDYxREFBNEM7O2lCQUU3Qzs7Ozs7dUJBRUUsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLE1BQU07K0JBQ04sTUFBTTt1QkFNTixZQUFZLFNBQUMsUUFBUTs7SUFrRXhCLDJCQUFDO0NBQUEsQUFqRkQsSUFpRkM7U0E1RVksb0JBQW9COzs7SUFDL0Isb0NBQWM7O0lBQ2Qsc0NBQWdCOztJQUNoQix5Q0FBdUU7O0lBQ3ZFLDRDQUFvRTs7SUFDcEUsb0NBQWdCOztJQUVoQix3Q0FBYzs7SUFFZCw2Q0FBbUI7O0lBQ25CLG9DQUE2Qjs7SUFDN0IsMkNBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQENvbXBvbmVudCh7XG4vLyAgIHNlbGVjdG9yOiAnbGliLWphLXR5cGVhaGVhZCcsXG4vLyAgIHRlbXBsYXRlOiBgXG4vLyAgICAgPHA+XG4vLyAgICAgICBqYS10eXBlYWhlYWQgd29ya3MhMTIzXG4vLyAgICAgPC9wPlxuLy8gICBgLFxuLy8gICBzdHlsZXM6IFtdXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEphVHlwZWFoZWFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuLy8gICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4vLyAgIG5nT25Jbml0KCkge1xuLy8gICB9XG5cbi8vIH1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1qYS10eXBlYWhlYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vamEtdHlwZWFoZWFkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vamEtdHlwZWFoZWFkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSmFUeXBlYWhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhO1xuICBASW5wdXQoKSBjb25maWc7XG4gIEBPdXRwdXQoKSBmZXRjaERhdGE6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBvblNlbGVjdEl0ZW06IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBqc29uRGF0YTogYW55O1xuXG4gIGNoZWNrYm94QXJyYXkgPSBbXTtcbiAgQFZpZXdDaGlsZHJlbignbXlJdGVtJykgaXRlbTtcbiAgc2VsZWN0ZWRJZHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5qc29uRGF0YSA9IHRoaXMuZGF0YTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgIGNvbnN0IGZvcm1Hcm91cCA9IHt9O1xuXG4gICAgdGhpcy5kYXRhLmZvckVhY2goZmMgPT4ge1xuICAgICAgY29uc29sZS5sb2coZmMpO1xuICAgICAgZm9ybUdyb3VwW2ZjLnVzZXJuYW1lXSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGZvcm1Hcm91cCk7XG4gIH1cblxuICBpbnB1dENsaWNrZWQoZSkge1xuICAgIHRoaXMuZmV0Y2hEYXRhLmVtaXQoZSk7XG4gICAgdGhpcy5jb25maWcuZGVmYXVsdFNob3cgPSB0cnVlO1xuICAgIC8vdGhpcy5jb25maWcubXVsdGlTZWxlY3QgPSAhdGhpcy5jb25maWcubXVsdGlTZWxlY3Q7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICB0aGlzLmpzb25EYXRhID0gdGhpcy5kYXRhO1xuICAgIC8vIH0sIDgwMCk7XG4gIH1cblxuICBmaWx0ZXJUeXBlYWhlYWQoZSkge1xuICAgIHRoaXMuanNvbkRhdGEgPSB0aGlzLmRhdGE7XG4gICAgbGV0IGZpbHRlcmVkID0gdGhpcy5qc29uRGF0YS5maWx0ZXIoKGV2ZW50KSA9PiB7XG4gICAgICByZXR1cm4gZXZlbnRbdGhpcy5jb25maWcuZGlzcGxheUxhYmVsXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgIH0pO1xuICAgIHRoaXMuanNvbkRhdGEgPSBmaWx0ZXJlZDtcbiAgfVxuXG4gIGl0ZW1DbGlja2VkKGV2ZW50LCBpZCwgaXRtKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25maWcubXVsdGlTZWxlY3QpO1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZElkcy5wdXNoKHsgaWQ6IGlkLCBpdG06IGl0bSwgY2hlY2tlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWQgfSk7XG4gICAgICBjb25zb2xlLmxvZygnU2VsZWN0ZWQgSWRzICcsIHRoaXMuc2VsZWN0ZWRJZHMpO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSWRzID0gdGhpcy5zZWxlY3RlZElkcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKTtcbiAgICB9XG5cbiAgICAvL3RoaXMub25TZWxlY3RJdGVtLmVtaXQodGhpcy5zZWxlY3RlZElkcyk7XG5cbiAgICBpZiAodGhpcy5jb25maWcubXVsdGlTZWxlY3QgPT09IHRydWUpIHtcbiAgICAgIHRoaXMub25TZWxlY3RJdGVtLmVtaXQodGhpcy5zZWxlY3RlZElkcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25TZWxlY3RJdGVtLmVtaXQodGhpcy5zZWxlY3RlZElkc1t0aGlzLnNlbGVjdGVkSWRzLmxlbmd0aCAtIDFdKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldENoZWNrU3RhdGUodWMsIGkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh1YywgaSk7XG4gICAgLy8gcmV0dXJuIHVjID09PSAndScgPyB0cnVlIDogZmFsc2U7XG4gIH1cbiAgY2hlY2tib3hDbGlja2VkKGUsIHVjLCBpKSB7XG4gICAgdWMgPSB1YyA9PT0gJ3UnID8gJ2MnIDogJ3UnO1xuICAgIHRoaXMuZ2V0Q2hlY2tTdGF0ZSh1YywgaSk7XG4gIH1cblxufVxuXG4iXX0=