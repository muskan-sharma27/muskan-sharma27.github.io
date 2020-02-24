(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 align=\"center\">\n  PivotTable\n</h1>\n\n  <button  class=\"button\" (click) = \"popUp()\">Fields</button>\n  <button class=\"button\" (click)=\"popUp1()\">Calculator</button>\n  <button class=\"button\" (click)=\"openFullscreen()\">FullScreen</button>\n  \n  \n\n\n\n  \n<div>\n  <ng-container *ngIf=\"!start && !showcase\">\n    <table>\n      <tr >\n       \n        <th > {{ \"Category\" }} </th>\n            \n        <th>{{\"Month\"}}</th>\n        <th >{{ \"Revenue\" }}</th>\n        <th > {{\"Customer\"}} </th>\n        <th >{{\"OrderId\"}} </th>\n        <th >{{\"PaymentMethod\"}}</th>\n        <th >{{\"Quantity\"}}</th> \n        <th >{{\"Region\"}}</th>  \n        <th > {{\"Salesperson\"}}</th> \n        <th >{{\"ShippingCost\"}}</th>\n        <th >{{\"UnitPrice\"}}</th> \n        </tr>\n        <tr *ngFor=\"let x of arrData\">\n    \n          <td > {{ x.Category }} </td>\n          \n         <td >{{x.Month}}</td>\n         <td  >{{ x.Revenue }}</td>\n         <td > {{x.Customer}} </td>\n         <td >{{x.OrderId}} </td>\n         <td >{{x.PaymentMethod}}</td>\n         <td >{{x.Quantity}}</td> \n         <td >{{x.Region}}</td>  \n         <td > {{x.Salesperson}}</td> \n         <td >{{x.ShippingCost}}</td>\n         <td >{{x.UnitPrice}}</td> </tr>\n    </table>\n  </ng-container>\n  \n  <table *ngIf=\"start && !showcase\">\n    <tr >\n     \n      <th *ngIf=\"var1\"> {{ \"Category\" }} </th>\n          \n      <th *ngIf=\"var2\">{{\"Month\"}}</th>\n      <th  *ngIf=\"var3\">{{ \"Revenue\" }}</th>\n      <th *ngIf=\"var4\"> {{\"Customer\"}} </th>\n      <th *ngIf=\"var5\">{{\"OrderId\"}} </th>\n      <th *ngIf=\"var6\">{{\"PaymentMethod\"}}</th>\n      <th *ngIf=\"var7\">{{\"Quantity\"}}</th> \n      <th *ngIf=\"var8\">{{\"Region\"}}</th>  \n      <th *ngIf=\"var9\"> {{\"Salesperson\"}}</th> \n      <th *ngIf=\"var10\">{{\"ShippingCost\"}}</th>\n      <th *ngIf=\"var11\">{{\"UnitPrice\"}}</th> \n      </tr>\n      <tr *ngFor=\"let x of arrData\">\n  \n        <td *ngIf=\"var1\"> {{ x.Category }} </td>\n        \n       <td *ngIf=\"var2\">{{x.Month}}</td>\n       <td  *ngIf=\"var3\">{{ x.Revenue }}</td>\n       <td *ngIf=\"var4\"> {{x.Customer}} </td>\n       <td *ngIf=\"var5\">{{x.OrderId}} </td>\n       <td *ngIf=\"var6\">{{x.PaymentMethod}}</td>\n       <td *ngIf=\"var7\">{{x.Quantity}}</td> \n       <td *ngIf=\"var8\">{{x.Region}}</td>  \n       <td *ngIf=\"var9\"> {{x.Salesperson}}</td> \n       <td *ngIf=\"var10\">{{x.ShippingCost}}</td>\n       <td *ngIf=\"var11\">{{x.UnitPrice}}</td> </tr>\n       </table>\n</div>\n<div class=\"popup\"> \n<ng-container *ngIf=\"show\">\n  <button class=\"close\" (click)=\"close()\">X</button>\n  <p id=\"popup\"> Available Fields: </p>\n  <ul>\n    <li> <input type=\"checkbox\" ng-model=\"Category\" data-md-icheck (change)=\"toggleVisibility1($event)\">Category </li>\n     <li> <input type=\"checkbox\" ng-model=\"Month\" data-md-icheck (change)=\"toggleVisibility2($event)\">Month </li>\n    <li>  <input type=\"checkbox\" ng-model=\"Revenue\" data-md-icheck (change)=\"toggleVisibility3($event)\">Revenue </li>\n     <li> <input type=\"checkbox\" ng-model=\"Customer\" data-md-icheck (change)=\"toggleVisibility4($event)\">Customer </li>\n     <li><input type=\"checkbox\" ng-model=\"Order\" data-md-icheck (change)=\"toggleVisibility5($event)\"> Order ID </li>\n     <li> <input type=\"checkbox\" ng-model=\"Payment\" data-md-icheck (change)=\"toggleVisibility6($event)\"> Payment Method</li>\n     <li><input type=\"checkbox\" ng-model=\"Quantity\" data-md-icheck (change)=\"toggleVisibility7($event)\"> Quantity </li>\n     <li> <input type=\"checkbox\" ng-model=\"Region\" data-md-icheck (change)=\"toggleVisibility8($event)\">Region </li>\n     <li> <input type=\"checkbox\" ng-model=\"Salesperson\" data-md-icheck (change)=\"toggleVisibility9($event)\"> Salesperson</li>\n     <li> <input type=\"checkbox\" ng-model=\"Shipping\" data-md-icheck (change)=\"toggleVisibility10($event)\"> Shipping Cost</li>\n     <li> <input type=\"checkbox\" ng-model=\"UP\" data-md-icheck (change)=\"toggleVisibility11($event)\">UnitPrice </li>\n     </ul> \n     \n</ng-container>\n</div>\n<div class=\"popup\"> \n  <ng-container *ngIf=\"show1\">\n    <button class=\"close\" (click)=\"close()\">X</button>\n    <p id=\"popup\">Calculator</p> <hr>\n\n    <div class=\"CalcDisp\">\n      <ng-container *ngIf=\"show1\"> \n        <ng-container>\n          {{displayVal}}\n        </ng-container>\n\n  \n  \n    </ng-container>\n\n    </div>\n   \n    <div class=\"input-text\">\n      New Field Name:\n      <input #newHero style=\"width: 100px; padding: 5px; margin-left:2px; border-radius: 3px;\"\n      (keyup.enter)=\"addHero(newHero.value)\"\n    (blur)=\"addHero(newHero.value); newHero.value='' \"> \n    </div>\n    \n    <p id=\"popup\">Fields</p>\n    <button class=\"buttonCalculator1\" (click)=\"Revenue()\">Revenue</button> \n    <button class=\"buttonCalculator2\" (click)=\"Quantity()\">Quantity</button>\n    <button class=\"buttonCalculator3\" (click)=\"SC()\">Shipping Cost</button>\n    <button class=\"buttonCalculator4\" (click)=\"UP()\">Unit Price</button> <br> <hr>\n   <!--- <p id=\"popup\">Aggregate Functions:</p>\n    <button class=\"buttonOperator1\" (click)=\"Sum()\"> <b> Sum() </b> </button> <hr> -->\n    <p id=\"popup\">Operators</p> \n    <button class=\"buttonOperator1\" (click)=\"Plus()\"> <b> + </b> </button>\n    <button class=\"buttonOperator2\" (click)=\"Minus()\"><b> - </b></button> \n    <button class=\"buttonOperator3\" (click)=\"Mul()\"><b> * </b></button>\n    <button class=\"buttonOperator4\" (click)=\"Divide()\"><b> / </b></button> <br>\n    \n     <!--<div class=\"selectedText\">\n      <p *ngIf=\"revenue==1\">{{Revenue}}</p>\n      <p *ngIf=\"quantity==1\">{{Quantity}}</p>\n      <p *ngIf=\"sc==1\">{{Shipping Cost}}</p>\n      <p *ngIf=\"up==1\">{{Unit Price}}</p>\n     </div> -->\n      \n    \n    <button class=\"button1\" (click)=\"Calculate()\">Calculate</button>\n    \n    \n  \n \n  </ng-container>\n  </div>\n  <div>\n <!--Entire Table>-->\n    <ng-container *ngIf=\"!start\">\n      <table>\n        <tr>\n          <th>\n            {{ \"Category\" }} \n          </th>\n          <th>{{\"Month\"}}</th>\n          <th>{{ \"Revenue\" }}</th>\n          <th>{{\"Customer\"}}</th>\n          <th>{{\"OrderId\"}}</th>\n          <th>{{\"PaymentMethod\"}}</th>\n          <th>{{\"Quantity\"}}</th>\n          <th>{{\"Region\"}}</th>\n          <th>{{\"Salesperson\"}}</th>\n          <th>{{\"ShippingCost\"}}</th>\n          <th>{{\"UnitPrice\"}}</th>\n          <th>{{NewField}}</th>\n          </tr>\n          <tr *ngFor=\"let x of arrData\">\n      \n            <td > {{ x.Category }} </td>\n            \n           <td >{{x.Month}}</td>\n           <td  >{{ x.Revenue }}</td>\n           <td > {{x.Customer}} </td>\n           <td >{{x.OrderId}} </td>\n           <td >{{x.PaymentMethod}}</td>\n           <td >{{x.Quantity}}</td> \n           <td >{{x.Region}}</td>  \n           <td > {{x.Salesperson}}</td> \n           <td >{{x.ShippingCost}}</td>\n           <td >{{x.UnitPrice}}</td> \n          \n         \n\n         <!--Add-->\n         <ng-container *ngIf=\"revenue==1 && quantity==2 && plus==1 \"><td>{{x.Revenue + x.Quantity}}</td></ng-container>\n         <ng-container *ngIf=\"revenue==2 && qunatity==1 && plus==1 \"><td>{{x.Quantity+x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==1 && sc==2 && plus==1 \"><td>{{x.Revenue+x.ShippingCost}}</td></ng-container>\n           \n          <ng-container *ngIf=\"revenue==2 && sc==1 && plus==1 \"><td>{{x.ShippingCost+x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==2 && up==1 && plus==1  \"><td>{{x.UnitPrice+x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==1 && up==2 && plus==1 \"><td>{{x.UnitPrice+x.Revenue}}</td></ng-container>\n\n          <ng-container *ngIf=\"quantity==1 && sc==2 && plus==1 \"><td>{{x.Quantity+x.ShippingCost}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==2 && sc==1 && plus==1 \"><td>{{x.ShippingCost+x.Quantity}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==1 && up==2 && plus==1 \"><td>{{x.Quantity+x.UnitPrice}}</td></ng-container> \n          <ng-container *ngIf=\"quantity==2 && up==1 && plus==1 \"><td>{{x.UnitPrice+x.Quantity}}</td></ng-container>\n          <ng-container *ngIf=\"sc==1 && up==2 && plus==1\"><td>{{x.ShippingCost+x.UnitPrice}}</td></ng-container>\n          <ng-container *ngIf=\"sc==2 && up==1 && plus==1 \"><td>{{x.UnitPrice+x.ShippingCost}}</td></ng-container> \n          <!--Multiply-->\n          <ng-container *ngIf=\"revenue==1 && quantity==2 && mul==1 \"><td>{{x.Revenue * x.Quantity}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==2 && qunatity==1 && mul==1\"><td>{{x.Quantity*x.Revenue}}</td></ng-container>\n           <ng-container *ngIf=\"revenue==1 && sc==2 && mul==1 \"><td>{{x.Revenue*x.ShippingCost}}</td></ng-container>\n            <ng-container *ngIf=\"revenue==2 && sc==1 && mul==1 \"><td>{{x.ShippingCost*x.Revenue}}</td></ng-container>\n           <ng-container *ngIf=\"quantity==1 && sc==2 && mul==1 \"><td>{{x.Quantity*x.ShippingCost}}</td></ng-container>\n           <ng-container *ngIf=\"quantity==2 && sc==1 && mul==1 \"><td>{{x.ShippingCost*x.Quantity}}</td></ng-container>\n           <ng-container *ngIf=\"quantity==1 && up==2 && mul==1 \"><td>{{x.Quantity*x.UnitPrice}}</td></ng-container> \n           <ng-container *ngIf=\"quantity==2 && up==1 && mul==1 \"><td>{{x.UnitPrice*x.Quantity}}</td></ng-container>\n           <ng-container *ngIf=\"sc==1 && up==2 && mul==1 \"><td>{{x.ShippingCost*x.UnitPrice}}</td></ng-container>\n           <ng-container *ngIf=\"sc==2 && up==1 && mul==1 \"><td>{{x.UnitPrice*x.ShippingCost}}</td></ng-container> \n\n          <!--Subtract-->\n         <ng-container *ngIf=\"revenue==1 && quantity==2 && minus==1 \"><td>{{x.Revenue - x.Quantity}}</td></ng-container>\n         <ng-container *ngIf=\"revenue==2 && qunatity==1 && minus==1 \"><td>{{x.Quantity-x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==1 && sc==2 && minus==1 \"><td>{{x.Revenue-x.ShippingCost}}</td></ng-container>\n           <ng-container *ngIf=\"revenue==2 && sc==1 && minus==1 \"><td>{{x.ShippingCost-x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==1 && sc==2 && minus==1 \"><td>{{x.Quantity-x.ShippingCost}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==2 && sc==1 && minus==1 \"><td>{{x.ShippingCost-x.Quantity}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==1 && up==2 && minus==1 \"><td>{{x.Quantity-x.UnitPrice}}</td></ng-container> \n          <ng-container *ngIf=\"quantity==2 && up==1 && minus==1 \"><td>{{x.UnitPrice-x.Quantity}}</td></ng-container>\n          <ng-container *ngIf=\"sc==1 && up==2 && minus==1 \"><td>{{x.ShippingCost-x.UnitPrice}}</td></ng-container>\n          <ng-container *ngIf=\"sc==2 && up==1 && minus==1 \"><td>{{x.UnitPrice-x.ShippingCost}}</td></ng-container> \n         \n            <!--Divide-->\n          <ng-container *ngIf=\"revenue==1 && quantity==2 && divide==1\"><td>{{x.Revenue / x.Quantity}}</td></ng-container>\n           <ng-container *ngIf=\"revenue==2 && qunatity==1 && divide1\"><td>{{x.Quantity/x.Revenue}}</td></ng-container>\n            <ng-container *ngIf=\"revenue==1 && sc==2 && divide==1\"><td>{{x.Revenue/x.ShippingCost}}</td></ng-container>\n             <ng-container *ngIf=\"revenue==2 && sc==1 && divide==1 \"><td>{{x.ShippingCost/x.Revenue}}</td></ng-container>\n            <ng-container *ngIf=\"quantity==1 && sc==2 && divide==1 \"><td>{{x.Quantity/x.ShippingCost}}</td></ng-container>\n            <ng-container *ngIf=\"quantity==2 && sc==1 && divide==1 \"><td>{{x.ShippingCost/x.Quantity}}</td></ng-container>\n            <ng-container *ngIf=\"quantity==1 && up==2 && divide==1\"><td>{{x.Quantity/x.UnitPrice}}</td></ng-container> \n            <ng-container *ngIf=\"quantity==2 && up==1 && divide==1 \"><td>{{x.UnitPrice/x.Quantity}}</td></ng-container>\n            <ng-container *ngIf=\"sc==1 && up==2 && divide==1 \"><td>{{x.ShippingCost/x.UnitPrice}}</td></ng-container>\n            <ng-container *ngIf=\"sc==2 && up==1 && divide==1 \"><td>{{x.UnitPrice/x.ShippingCost}}</td></ng-container> \n\n\n            <ng-container *ngIf=\"agg_sum==1 && revenue == 3 && quantity==1 && plus==1 \">{{ rev_sum + x.Quantity}}</ng-container>\n          </tr>\n      </table>\n    </ng-container>\n   \n    <!---------------------------------------------------------------------->\n  \n    <ng-container *ngIf=\"displatTable\">\n      <table>\n        <tr >\n         \n          <td *ngIf=\"var1\"> {{ \"Category\" }} </td>\n              \n          <td *ngIf=\"var2\">{{\"Month\"}}</td>\n          <td  *ngIf=\"var3\">{{ \"Revenue\" }}</td>\n          <td *ngIf=\"var4\"> {{\"Customer\"}} </td>\n          <td *ngIf=\"var5\">{{\"OrderId\"}} </td>\n          <td *ngIf=\"var6\">{{\"PaymentMethod\"}}</td>\n          <td *ngIf=\"var7\">{{\"Quantity\"}}</td> \n          <td *ngIf=\"var8\">{{\"Region\"}}</td>  \n          <td *ngIf=\"var9\"> {{\"Salesperson\"}}</td> \n          <td *ngIf=\"var10\">{{\"ShippingCost\"}}</td>\n          <td *ngIf=\"var11\">{{\"UnitPrice\"}}</td> \n          <td>{{NewField}}</td></tr>\n          <tr *ngFor=\"let x of arrData\">\n      \n            <td *ngIf=\"var1\"> {{ x.Category }} </td>\n            \n           <td *ngIf=\"var2\">{{x.Month}}</td>\n           <td  *ngIf=\"var3\">{{ x.Revenue }}</td>\n           <td *ngIf=\"var4\"> {{x.Customer}} </td>\n           <td *ngIf=\"var5\">{{x.OrderId}} </td>\n           <td *ngIf=\"var6\">{{x.PaymentMethod}}</td>\n           <td *ngIf=\"var7\">{{x.Quantity}}</td> \n           <td *ngIf=\"var8\">{{x.Region}}</td>  \n           <td *ngIf=\"var9\"> {{x.Salesperson}}</td> \n           <td *ngIf=\"var10\">{{x.ShippingCost}}</td>\n           <td *ngIf=\"var11\">{{x.UnitPrice}}</td> \n            <!--Add-->\n         <ng-container *ngIf=\"revenue==1 && quantity==2 && plus==1 \"><td>{{x.Revenue + x.Quantity}}</td></ng-container>\n         <ng-container *ngIf=\"revenue==2 && qunatity==1 && plus==1 \"><td>{{x.Quantity+x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==1 && sc==2 && plus==1 \"><td>{{x.Revenue+x.ShippingCost}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==2 && sc==1 && plus==1 \"><td>{{x.ShippingCost+x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==2 && up==1 && plus==1  \"><td>{{x.UnitPrice+x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==1 && up==2 && plus==1 \"><td>{{x.UnitPrice+x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==1 && sc==2 && plus==1 \"><td>{{x.Quantity+x.ShippingCost}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==2 && sc==1 && plus==1 \"><td>{{x.ShippingCost+x.Quantity}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==1 && up==2 && plus==1 \"><td>{{x.Quantity+x.UnitPrice}}</td></ng-container> \n          <ng-container *ngIf=\"quantity==2 && up==1 && plus==1 \"><td>{{x.UnitPrice+x.Quantity}}</td></ng-container>\n          <ng-container *ngIf=\"sc==1 && up==2 && plus==1\"><td>{{x.ShippingCost+x.UnitPrice}}</td></ng-container>\n          <ng-container *ngIf=\"sc==2 && up==1 && plus==1 \"><td>{{x.UnitPrice+x.ShippingCost}}</td></ng-container> \n          <!--Multiply-->\n          <ng-container *ngIf=\"revenue==1 && quantity==2 && mul==1 \"><td>{{x.Revenue * x.Quantity}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==2 && qunatity==1 && mul==1\"><td>{{x.Quantity*x.Revenue}}</td></ng-container>\n           <ng-container *ngIf=\"revenue==1 && sc==2 && mul==1 \"><td>{{x.Revenue*x.ShippingCost}}</td></ng-container>\n            <ng-container *ngIf=\"revenue==2 && sc==1 && mul==1 \"><td>{{x.ShippingCost*x.Revenue}}</td></ng-container>\n           <ng-container *ngIf=\"quantity==1 && sc==2 && mul==1 \"><td>{{x.Quantity*x.ShippingCost}}</td></ng-container>\n           <ng-container *ngIf=\"quantity==2 && sc==1 && mul==1 \"><td>{{x.ShippingCost*x.Quantity}}</td></ng-container>\n           <ng-container *ngIf=\"quantity==1 && up==2 && mul==1 \"><td>{{x.Quantity*x.UnitPrice}}</td></ng-container> \n           <ng-container *ngIf=\"quantity==2 && up==1 && mul==1 \"><td>{{x.UnitPrice*x.Quantity}}</td></ng-container>\n           <ng-container *ngIf=\"sc==1 && up==2 && mul==1 \"><td>{{x.ShippingCost*x.UnitPrice}}</td></ng-container>\n           <ng-container *ngIf=\"sc==2 && up==1 && mul==1 \"><td>{{x.UnitPrice*x.ShippingCost}}</td></ng-container> \n\n          <!--Subtract-->\n         <ng-container *ngIf=\"revenue==1 && quantity==2 && minus==1 \"><td>{{x.Revenue - x.Quantity}}</td></ng-container>\n         <ng-container *ngIf=\"revenue==2 && qunatity==1 && minus==1 \"><td>{{x.Quantity-x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"revenue==1 && sc==2 && minus==1 \"><td>{{x.Revenue-x.ShippingCost}}</td></ng-container>\n           <ng-container *ngIf=\"revenue==2 && sc==1 && minus==1 \"><td>{{x.ShippingCost-x.Revenue}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==1 && sc==2 && minus==1 \"><td>{{x.Quantity-x.ShippingCost}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==2 && sc==1 && minus==1 \"><td>{{x.ShippingCost-x.Quantity}}</td></ng-container>\n          <ng-container *ngIf=\"quantity==1 && up==2 && minus==1 \"><td>{{x.Quantity-x.UnitPrice}}</td></ng-container> \n          <ng-container *ngIf=\"quantity==2 && up==1 && minus==1 \"><td>{{x.UnitPrice-x.Quantity}}</td></ng-container>\n          <ng-container *ngIf=\"sc==1 && up==2 && minus==1 \"><td>{{x.ShippingCost-x.UnitPrice}}</td></ng-container>\n          <ng-container *ngIf=\"sc==2 && up==1 && minus==1 \"><td>{{x.UnitPrice-x.ShippingCost}}</td></ng-container> \n         \n            <!--Divide-->\n          <ng-container *ngIf=\"revenue==1 && quantity==2 && divide==1\"><td>{{x.Revenue / x.Quantity}}</td></ng-container>\n           <ng-container *ngIf=\"revenue==2 && qunatity==1 && divide1\"><td>{{x.Quantity/x.Revenue}}</td></ng-container>\n            <ng-container *ngIf=\"revenue==1 && sc==2 && divide==1\"><td>{{x.Revenue/x.ShippingCost}}</td></ng-container>\n             <ng-container *ngIf=\"revenue==2 && sc==1 && divide==1 \"><td>{{x.ShippingCost/x.Revenue}}</td></ng-container>\n            <ng-container *ngIf=\"quantity==1 && sc==2 && divide==1 \"><td>{{x.Quantity/x.ShippingCost}}</td></ng-container>\n            <ng-container *ngIf=\"quantity==2 && sc==1 && divide==1 \"><td>{{x.ShippingCost/x.Quantity}}</td></ng-container>\n            <ng-container *ngIf=\"quantity==1 && up==2 && divide==1\"><td>{{x.Quantity/x.UnitPrice}}</td></ng-container> \n            <ng-container *ngIf=\"quantity==2 && up==1 && divide==1 \"><td>{{x.UnitPrice/x.Quantity}}</td></ng-container>\n            <ng-container *ngIf=\"sc==1 && up==2 && divide==1 \"><td>{{x.ShippingCost/x.UnitPrice}}</td></ng-container>\n            <ng-container *ngIf=\"sc==2 && up==1 && divide==1 \"><td>{{x.UnitPrice/x.ShippingCost}}</td></ng-container> \n\n           </tr>\n           </table>    \n    </ng-container>\n\n  </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar{\r\n    margin-top: 50px;\r\n    padding-top: 50px;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n    margin-top:10px;\r\n  }\r\ntable, th, td {\r\n    border-bottom: 1px solid #ddd;\r\n    \r\n  }\r\nth, td {\r\n    padding: 10px;\r\n    text-align: left;\r\n  }\r\n.image{\r\n     \r\n    display: inline-block; /* the default for span */\r\n    \r\n    margin-left:10px;\r\n    margin-bottom: -10px;\r\n      \r\n    \r\n  }\r\n.button{\r\n    background-color:skyblue; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n  }\r\n.buttonCalculator1{\r\n    background-color:skyblue; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding:20px;\r\n    padding-left: 20px;\r\n    padding-right:20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin-bottom: 5px;\r\n    margin-left:20px;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n    border-radius:2px;\r\n  }\r\n.buttonCalculator2{\r\n    background-color:skyblue; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 20px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin-bottom: 5px;\r\n    margin-left:10px;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n    border-radius:2px;\r\n  }\r\n.buttonCalculator3{\r\n    background-color:skyblue; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 20px;\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin-bottom: 5px;\r\n    margin-left:20px;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n    border-radius:2px;\r\n  }\r\n.buttonCalculator4{\r\n    background-color:skyblue; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 20px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin-bottom: 5px;\r\n    margin-left:10px;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n    border-radius:2px;\r\n  }\r\n.buttonOperator1{\r\n    background-color:skyblue; /* Green */\r\n    border: none;\r\n    color:black;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin-left:20px;\r\n    margin-top:2px;\r\n    cursor: pointer;\r\n    margin-bottom: 4px;\r\n    border-radius:2px;\r\n  }\r\n.buttonOperator2{\r\n    background-color:skyblue; /* Green */\r\n    border: none;\r\n    color: black;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin-left:10px;\r\n    cursor: pointer;\r\n    margin-top:2px;\r\n    margin-bottom: 4px;\r\n    border-radius:2px;\r\n  }\r\n.buttonOperator3{\r\n    background-color:skyblue; /* Green */\r\n    border: none;\r\n    color:black;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin-left:10px;\r\n    margin-top:2px;\r\n    cursor: pointer;\r\n    margin-bottom: 4px;\r\n    border-radius:2px;\r\n  }\r\n.buttonOperator4{\r\n    background-color:skyblue; /* Green */\r\n    border: none;\r\n    color: black;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin-left:10px;\r\n    margin-top:2px;\r\n    cursor: pointer;\r\n    margin-bottom: 4px;\r\n    border-radius:2px;\r\n  }\r\n.button1{\r\n    background-color:skyblue; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 15px;\r\n    padding-left:60px;\r\n    padding-right:60px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin-top:10px;\r\n    margin-bottom: 10px;\r\n    margin-left:40px;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n  }\r\n.close{\r\n      background-color: #f22121;\r\n      color:black;\r\n      border-radius:30px;\r\n      padding:10px;\r\n      margin-top: 10px;\r\n      margin-left:200px;\r\n      border:none;\r\n  }\r\n.popup{\r\n\r\n  \r\n    background-color: #555;\r\n    color: #fff;\r\n    \r\n    border: none;\r\n    border-radius: 6px;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n    opacity: 0.9;\r\n    position: absolute;\r\n    top:28px;\r\n    \r\n    right:30px;\r\n    width: 250px;\r\n    \r\n  \r\n  \r\n}\r\n.Calculator{\r\n    background-color: #555;\r\n    color: #fff;\r\n    \r\n    border: none;\r\n    border-radius: 6px;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n    opacity: 0.9;\r\n    position: fixed;\r\n    top:28px;\r\n    \r\n    right:30px;\r\n    width: 200px;\r\n}\r\n#popup{\r\n    text-align: center;\r\n}\r\nul{\r\n  \r\n    list-style-type:none;\r\n    width: 140px;\r\n  }\r\nli{\r\n    \r\n    margin-left:-40px;\r\n  }\r\n#newHero{\r\n    padding-right:50px;\r\n    padding-left: 50px;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n.CalcDisp{\r\n  \r\n  width: 200px;\r\n  padding:15px;\r\n  margin-left:10px;\r\n  margin-bottom: 20px;\r\n  margin-top:20px;\r\n  background-color:black;\r\n  border-radius: 6px;\r\n  color: white;\r\n  text-align: center;\r\n\r\n}\r\n.input-text{\r\n  margin-left:7px;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsNkJBQTZCOztFQUUvQjtBQUNBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjtBQUNBOztJQUVFLHFCQUFxQixFQUFFLHlCQUF5Qjs7SUFFaEQsZ0JBQWdCO0lBQ2hCLG9CQUFvQjs7O0VBR3RCO0FBQ0E7SUFDRSx3QkFBd0IsRUFBRSxVQUFVO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSx3QkFBd0IsRUFBRSxVQUFVO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0Usd0JBQXdCLEVBQUUsVUFBVTtJQUNwQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLHdCQUF3QixFQUFFLFVBQVU7SUFDcEMsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSx3QkFBd0IsRUFBRSxVQUFVO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0Usd0JBQXdCLEVBQUUsVUFBVTtJQUNwQyxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSx3QkFBd0IsRUFBRSxVQUFVO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLHdCQUF3QixFQUFFLFVBQVU7SUFDcEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0Usd0JBQXdCLEVBQUUsVUFBVTtJQUNwQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSx3QkFBd0IsRUFBRSxVQUFVO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjtBQUNBO01BQ0kseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsV0FBVztFQUNmO0FBQ0Y7OztJQUdJLHNCQUFzQjtJQUN0QixXQUFXOztJQUVYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7O0lBRVIsVUFBVTtJQUNWLFlBQVk7Ozs7QUFJaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXOztJQUVYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLFFBQVE7O0lBRVIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7QUFDQTs7SUFFRSxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0FBQ0Y7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7O0FBRXBCO0FBQ0E7RUFDRSxlQUFlOztBQUVqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIFxyXG4gIH1cclxuICB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5pbWFnZXtcclxuICAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogdGhlIGRlZmF1bHQgZm9yIHNwYW4gKi9cclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgICBcclxuICAgIFxyXG4gIH1cclxuICAuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpza3libHVlOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuYnV0dG9uQ2FsY3VsYXRvcjF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNreWJsdWU7IC8qIEdyZWVuICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoycHg7XHJcbiAgfVxyXG4gIC5idXR0b25DYWxjdWxhdG9yMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6c2t5Ymx1ZTsgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xyXG4gIH1cclxuICAuYnV0dG9uQ2FsY3VsYXRvcjN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNreWJsdWU7IC8qIEdyZWVuICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoycHg7XHJcbiAgfVxyXG4gIC5idXR0b25DYWxjdWxhdG9yNHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6c2t5Ymx1ZTsgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xyXG4gIH1cclxuICAuYnV0dG9uT3BlcmF0b3Ixe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpza3libHVlOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIG1hcmdpbi10b3A6MnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoycHg7XHJcbiAgfVxyXG4gIC5idXR0b25PcGVyYXRvcjJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNreWJsdWU7IC8qIEdyZWVuICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoycHg7XHJcbiAgfVxyXG4gIC5idXR0b25PcGVyYXRvcjN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNreWJsdWU7IC8qIEdyZWVuICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjJweDtcclxuICB9XHJcbiAgLmJ1dHRvbk9wZXJhdG9yNHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6c2t5Ymx1ZTsgLyogR3JlZW4gKi9cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjJweDtcclxuICB9XHJcbiAgLmJ1dHRvbjF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNreWJsdWU7IC8qIEdyZWVuICovXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIC5jbG9zZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyMjEyMTtcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MzBweDtcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDoyMDBweDtcclxuICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgfVxyXG4ucG9wdXB7XHJcblxyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjI4cHg7XHJcbiAgICBcclxuICAgIHJpZ2h0OjMwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBcclxuICBcclxuICBcclxufVxyXG4uQ2FsY3VsYXRvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDoyOHB4O1xyXG4gICAgXHJcbiAgICByaWdodDozMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiNwb3B1cHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG51bHtcclxuICBcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gIH1cclxuICBsaXtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6LTQwcHg7XHJcbiAgfVxyXG4gXHJcbiAgI25ld0hlcm97XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbi5DYWxjRGlzcHtcclxuICBcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzoxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmlucHV0LXRleHR7XHJcbiAgbWFyZ2luLWxlZnQ6N3B4O1xyXG4gIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let AppComponent = class AppComponent {
      constructor(httpService, document) {
        this.httpService = httpService;
        this.document = document;
        this.title = 'Pivot Table';
        this.show = false;
        this.show1 = false;
        this.revenue = 0;
        this.quantity = 0;
        this.sc = 0;
        this.up = 0;
        this.plus = 0;
        this.minus = 0;
        this.mul = 0;
        this.divide = 0;
        this.displatTable = 0;
        this.cv = 0;
        this.op = 0;
        this.displayVal = "";
        this.noc = 0;
        this.sumTimes = 0;
        this.agg_sum = 0;
        this.rev_sum = 708785;
        this.qua_sum = 163550;
        this.sc_sum = 6001.5;
        this.up_sum = 781.78;
        this.heroes = ["Category", "Revenue", "Month", "Customer", "Order Id", "Payment Method", "Quantity", "Region", "Salesperson", "Shipping Cost", "Unit Price"];
        this.start = 0;
        this.display = false;
        this.showcase = 0;
      }

      ngOnInit() {
        this.httpService.get('./assets/data.json').subscribe(data => {
          this.arrData = data; // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
        }, err => {
          console.log(err.message);
        });
        this.elem = document.documentElement;
      }

      addHero(newHero) {
        if (newHero) {
          this.NewField = newHero;
          this.heroes.push(newHero);
        }
      }

      openFullscreen() {
        if (this.elem.requestFullscreen) {
          this.elem.requestFullscreen();
        } else if (this.elem.mozRequestFullScreen) {
          /* Firefox */
          this.elem.mozRequestFullScreen();
        } else if (this.elem.webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          this.elem.webkitRequestFullscreen();
        } else if (this.elem.msRequestFullscreen) {
          /* IE/Edge */
          this.elem.msRequestFullscreen();
        }
      }

      popUp() {
        this.show = !this.show;
      }

      popUp1() {
        this.show1 = !this.show1;
      }

      Close() {}

      toggleVisibility0(e) {
        this.var0 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; // this.cb=1;
      }

      toggleVisibility1(e) {
        this.var1 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; //this.cb=1;
      }

      toggleVisibility2(e) {
        this.var2 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; // this.cb=1;
      }

      toggleVisibility3(e) {
        this.var3 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; //this.cb=1;
      }

      toggleVisibility4(e) {
        this.var4 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; // this.cb=1;
      }

      toggleVisibility5(e) {
        this.var5 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; // this.cb=1;
      }

      toggleVisibility6(e) {
        this.var6 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; // this.cb=1;
      }

      toggleVisibility7(e) {
        this.var7 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; //this.cb=1;
      }

      toggleVisibility8(e) {
        this.var8 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; //this.cb=1;
      }

      toggleVisibility9(e) {
        this.var9 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; // this.cb=1;
      }

      toggleVisibility10(e) {
        this.var10 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; //this.cb=1;
      }

      toggleVisibility11(e) {
        this.var11 = e.target.checked;
        this.start = 1;
        this.displatTable = 1; //this.cb=1;}
      }

      Revenue() {
        if (this.quantity == 0 && this.sc == 0 && this.up == 0) {
          this.revenue = 1;
          this.displayVal = this.displayVal + "Revenue";
        } else {
          this.revenue = 2;
          this.displayVal = this.displayVal + " Revenue";
        }

        if (this.agg_sum == 1) {
          this.revenue = 3;
          this.agg_sum = 0;
          this.displayVal = this.displayVal + "Sum(Revenue)";
        } //alert("You Selected Revenue");


        this.cv++;
      }

      Quantity() {
        if (this.revenue == 0 && this.sc == 0 && this.up == 0) {
          this.quantity = 1;
          this.displayVal = this.displayVal + "Quantity";
        } else {
          this.quantity = 2;
          this.displayVal = this.displayVal + " Quantity";
        }

        if (this.agg_sum == 1) {
          this.quantity = 3;
          this.agg_sum = 0; ////this.agg_sum = this.agg_sum + this.qua_sum;

          this.displayVal = this.displayVal + "Sum(Quantity)";
        } //alert("You Selected Quantity");


        this.cv++;
      }

      SC() {
        if (this.revenue == 0 && this.quantity == 0 && this.up == 0) {
          this.sc = 1;
          this.displayVal = this.displayVal + "Shipping Cost";
        } else {
          this.sc = 2;
          this.displayVal = this.displayVal + " Shipping Cost";
        }

        if (this.agg_sum == 1) {
          this.sc = 3;
          this.agg_sum = 0; // this.agg_sum = this.agg_sum + this.sc_sum;

          this.displayVal = this.displayVal + "Sum(Shipping Cost)";
        } //alert("You Selected Shipping Cost");


        this.cv++;
      }

      UP() {
        if (this.revenue == 0 && this.quantity == 0 && this.sc == 0) {
          this.up = 1;
          this.displayVal = this.displayVal + "Unit Price";
        } else {
          this.up = 2;
          this.displayVal = this.displayVal + " Unit Price";
        }

        if (this.agg_sum == 1) {
          this.up = 3;
          this.agg_sum = 0; //this.agg_sum = this.agg_sum + this.up_sum;

          this.displayVal = this.displayVal + "Sum(Unit Price)";
        }

        this.cv++; //alert("You Selected Unit Price");
      }

      Sum() {
        this.agg_sum = 1;
        this.cv++;
        this.sumTimes++;
        alert("Sum");
      }

      Plus() {
        this.plus = 1;
        this.displayVal = this.displayVal + " + ";
        this.op++; //alert("You Selected +")
      }

      Minus() {
        this.minus = 1;
        this.displayVal = this.displayVal + " - ";
        this.op++; //alert("You Selected -")
      }

      Mul() {
        this.mul = 1;
        this.displayVal = this.displayVal + " * ";
        this.op++; //alert("You Selected *")
      }

      Divide() {
        this.divide = 1;
        this.displayVal = this.displayVal + " / ";
        this.op++; //alert("You Selected /")
      }

      Calculate() {
        this.display = !this.display;
        this.showcase = 1;
        this.displayVal = "";
        if (this.cv == 0) alert("Pls select Fields");
        if (this.cv == 1) alert("Please select a field");
        if (this.op == 0) alert("Pls select an operator");
      }

      close() {
        this.show1 = false;
        this.show = false;
        this.displayVal = "";
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
      }]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Muskan Sharma\Calculator\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map