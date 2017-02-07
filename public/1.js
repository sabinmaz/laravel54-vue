webpackJsonp([1],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(13)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\xampp\\htdocs\\laravel54\\resources\\assets\\js\\components\\Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5252c9dd", Component.options)
  } else {
    hotAPI.reload("data-v-5252c9dd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            username: '',
            password: '',
            role: ''
        };
    },

    methods: {
        onSubmitted: function onSubmitted() {
            if (this.role == 1) {
                this.$parent.user = this.username;
                this.$parent.role = this.role;
                this.$router.push('/receiption/dashboard');
            }
            //                this.pdf=new Pdf();
            //                this.pdf.text(20,10,this.username);
            //                this.pdf.text(20,20,this.password);
            //                this.pdf.save('test.pdf');

            //axios.post('')
            // console.log(this.username)
            // console.log(this.username)
        }
    }
};

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-offset-4 col-md-4"
  }, [_c('form', {
    attrs: {
      "id": "test"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.onSubmitted($event)
      }
    }
  }, [_c('md-card', [_c('md-card-header', [_c('div', {
    staticClass: "md-title"
  }, [_vm._v("\n                    " + _vm._s(_vm.$lang.messages.LOGIN) + "\n                ")])]), _vm._v(" "), _c('md-card-content', [_c('md-input-container', [_c('label', {
    attrs: {
      "for": "username"
    }
  }, [_vm._v(_vm._s(_vm.$lang.messages.USERNAME))]), _vm._v(" "), _c('md-input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    attrs: {
      "type": "text",
      "name": "username",
      "id": "username",
      "placeholder": ""
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        _vm.username = $event
      }
    }
  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('md-input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password",
      "name": "password",
      "id": "password",
      "placeholder": ""
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        _vm.password = $event
      }
    }
  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', {
    attrs: {
      "for": "role"
    }
  }, [_vm._v("Role")]), _vm._v(" "), _c('md-select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.role),
      expression: "role"
    }],
    attrs: {
      "name": "role",
      "id": "role"
    },
    domProps: {
      "value": (_vm.role)
    },
    on: {
      "input": function($event) {
        _vm.role = $event
      }
    }
  }, [_c('md-option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Receiption")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Cashier")]), _vm._v(" "), _c('md-option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Administrator")])], 1)], 1)], 1), _vm._v(" "), _c('md-card-actions', [_c('md-button', {
    staticClass: "md-raised md-accent md-flex-offset-70",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Login")])], 1)], 1)], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5252c9dd", module.exports)
  }
}

/***/ })

});