<template>
  <h3 class="a">
    Loaded component 13123123
    <p>{{model.name}}</p>
    <vue-json-pretty
      :path="'res'"
      :data="{ key: 'value' }"
      @click="">
    </vue-json-pretty>
  </h3>
</template>

<script>
  import _ from 'lodash';
  import BigNumber from 'bignumber.js'
  import VueJsonPretty from 'vue-json-pretty'
  export default {
    components: {VueJsonPretty},
    props: {
      model: {
        type: Object,
        default() {return {}}
      }
    },
    mounted() {
      const a = {a: 1, b: 2};
      console.log(new BigNumber(1).toNumber());
    },
  };
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
