<template>
  <div class="modalBase">
    CsoModalBase
    <slot />
  </div>
</template>
<script>
export default {
  name: 'CsoModalBase',
  components: {
  },
  props: {
  }
}
</script>
<style scoped lang="scss">
.modalBase {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
}
</style>
