/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var OkButtonComponent = /** @class */ (function () {
    function OkButtonComponent() {
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    OkButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ok-button',
                    template: "<a class=\"{{ prefixCls }}-ok-btn {{ okDisabled ? prefixCls + '-ok-btn-disabled' : '' }}\" role=\"button\" (click)=\"okDisabled ? null : clickOk.emit()\" > {{ locale.ok }} </a>"
                },] },
    ];
    /** @nocollapse */
    OkButtonComponent.propDecorators = {
        "locale": [{ type: Input },],
        "okDisabled": [{ type: Input },],
        "clickOk": [{ type: Output },],
    };
    return OkButtonComponent;
}());
export { OkButtonComponent };
function OkButtonComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    OkButtonComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    OkButtonComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    OkButtonComponent.propDecorators;
    /** @type {?} */
    OkButtonComponent.prototype.locale;
    /** @type {?} */
    OkButtonComponent.prototype.okDisabled;
    /** @type {?} */
    OkButtonComponent.prototype.clickOk;
    /** @type {?} */
    OkButtonComponent.prototype.prefixCls;
}
//# sourceMappingURL=ok-button.component.js.map