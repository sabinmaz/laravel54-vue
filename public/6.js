webpackJsonp([6],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(13)(
  /* script */
  null,
  /* template */
  __webpack_require__(57),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\xampp\\htdocs\\laravel54\\resources\\assets\\js\\components\\register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76925c82", Component.options)
  } else {
    hotAPI.reload("data-v-76925c82", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', [_c('md-card', [_c('md-card-header', [_c('div', {
    staticClass: "md-title"
  }, [_vm._v("Registration")])]), _vm._v(" "), _c('md-card-content', [_c('div', {
    staticClass: "row"
  }, [_c('br'), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('md-card', [_c('md-card-header', [_c('div', {
    staticClass: "md-subhead"
  }, [_vm._v("\n                                General\n                            ")])]), _vm._v(" "), _c('md-card-content', [_c('md-input-container', [_c('label', {
    attrs: {
      "for": "firstName"
    }
  }, [_vm._v("First Name")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "text",
      "name": "firstName",
      "id": "firstName"
    }
  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', {
    attrs: {
      "for": "midName"
    }
  }, [_vm._v("Mid Name")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "text",
      "name": "midName",
      "id": "midName"
    }
  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', {
    attrs: {
      "for": "lastName"
    }
  }, [_vm._v("Last Name")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "text",
      "name": "lastName",
      "id": "lastName"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('md-card', [_c('md-card-header', [_c('div', {
    staticClass: "md-subhead"
  }, [_vm._v("\n                              Account\n                            ")])]), _vm._v(" "), _c('md-card-content', [_vm._v("\n                            sadfafasdfsadf\n                        ")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('md-card', [_c('md-card-header', [_c('div', {
    staticClass: "md-subhead"
  }, [_vm._v("\n                                Official\n                            ")])]), _vm._v(" "), _c('md-card-content', [_vm._v("\n                            sadfafasdfsadf\n                        ")])], 1)], 1)])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76925c82", module.exports)
  }
}

/***/ })

});