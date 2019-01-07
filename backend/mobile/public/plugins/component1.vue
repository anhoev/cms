<template>
    <h3 class="a">Loaded component 13123123</h3>
</template>

<script>
  import _ from 'lodash';

  export default {
    mounted() {
      const a = { a: 1, b: 2 };
      console.log(_.pick(a, ['a']));
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
