<template>
  <div v-if="product!==null" class="ProductView">
    <font-awesome-icon class="pvButton" :icon="['fas', 'backward']" />
    <div class="pvProduct">
      <v-img
        :src="cCrePath(product.topimage)"
        aspect-ratio="1"
        class="pvImage"
      />
      <div class="pvTitle">
        <h3 class="pvName">
          {{ product.name }}
        </h3>
        <CgaPrice :price="product.price" class="pvPrice" />
      </div>
    </div>
    <font-awesome-icon class="pvButton" :icon="['fas', 'forward']" />
  </div>
</template>
<script>
import CgaPrice from '@/components/general/atoms/CgaPrice.vue'
const { mapGetters } = require('vuex')
export default {
  name: 'CsoProductView',
  components: {
    CgaPrice
  },
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapGetters('xd/shop/xdsshop', ['cCrePath'])
  }
}
</script>
<style scoped lang="scss">
.ProductView{
  display: flex;
  align-items: center;
  .pvProduct{
    flex-grow: 1;
    height: 100%;
    .pvImage{
      width: 100%;
      filter: drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.7));
    }
    .pvTitle{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .pvPrice{
        flex-shrink: 0;
      }
    }
  }
  .pvButton{
    flex: 0;
    filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.7));
  }
}
</style>
