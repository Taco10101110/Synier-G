<template>
  <span class="CgaPrice">
    {{ priceToView() }}
  </span>
</template>
<script>
export default {
  name: 'CgaPrice',
  props: {
    price: {
      type: Number,
      default: 0
    }
  },
  methods: {
    priceToView () {
      return `￥ ${this.$props.price.toLocaleString()}`
    }
  }
}
</script>
<style scoped lang="scss">
.CgaPrice{
  margin: 0;
  letter-spacing: 0rem;
  font-size:0.8em;
}
</style>
