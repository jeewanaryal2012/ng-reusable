import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, ViewChildren, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ja-typeahead.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JaTypeaheadService = /** @class */ (function () {
    function JaTypeaheadService() {
    }
    JaTypeaheadService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JaTypeaheadService.ctorParameters = function () { return []; };
    /** @nocollapse */ JaTypeaheadService.ngInjectableDef = ɵɵdefineInjectable({ factory: function JaTypeaheadService_Factory() { return new JaTypeaheadService(); }, token: JaTypeaheadService, providedIn: "root" });
    return JaTypeaheadService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ja-typeahead.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ja-typeahead.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JaTypeaheadModule = /** @class */ (function () {
    function JaTypeaheadModule() {
    }
    JaTypeaheadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [JaTypeaheadComponent],
                    imports: [
                        BrowserModule
                    ],
                    exports: [JaTypeaheadComponent]
                },] }
    ];
    return JaTypeaheadModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ja-typeahead.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { JaTypeaheadComponent, JaTypeaheadModule, JaTypeaheadService };
//# sourceMappingURL=ja-typeahead.js.map
