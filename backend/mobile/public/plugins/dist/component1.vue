<template>

  <h3 class="a">
    Loaded component 13123123
    <p>hello</p>
  </h3>

</template>
    <script>
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  mounted() {
    const a = {
      a: 1,
      b: 2
    };
    console.log(_lodash.default.pick(a, ['a']));
  }

};
exports.default = _default;
</script> 
<style scoped>

.a {
	color: #3e3e3e;
}

.b {
	color: #000
}

.c {
	color: #000
}

</style>
<style>

.d {
	color: #3e3e3e;
}

.e {
	color: #000
}

.f {
	color: #000
}

</style>
