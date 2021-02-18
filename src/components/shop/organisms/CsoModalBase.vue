<template>
  <transition appear>
    <div v-if="modalon" class="modalBase">
      <slot />
    </div>
  </transition>
</template>
<script>
export default {
  name: 'CsoModalBase',
  components: {
  },
  props: {
    modalon: {
      type: Boolean,
      default: false
    }
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
  padding: $hListmenu 1rem 1rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  color: white;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s
}

.v-enter, .v-leave-to {
  opacity: 0
}
</style>
