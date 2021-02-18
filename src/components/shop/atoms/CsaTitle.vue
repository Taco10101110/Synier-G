<template>
  <h2
    class="csaTitle"
    :style="Styles"
  >
    <slot />
  </h2>
</template>
<script>
export default {
  name: 'CsaTitle',
  props: {
    fontsize: {
      type: Number,
      default: 3.2
    }
  },
  data: () => ({
    cvs: null
  }),
  computed: {
    Styles () {
      return {
        '--fsize': `${this.$props.fontsize}rem`
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
.csaTitle {
  --fsize: 3.2rem;
  --fbase: 1;
  @include mq(xs){
    --fbase: 0.6;
  }
  font-size: calc(var(--fbase) * var(--fsize));
  word-break: keep-all;
  font-family: "M PLUS 1p";
  font-weight: 100;
  text-align: right;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  text-shadow: 4px 4px rgb(255, 123, 0), 8px 8px #000000;
  letter-spacing: 0.4rem;
  line-height: 1.2;
}
</style>
