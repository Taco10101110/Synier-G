<template>
  <div v-if="product!==null" class="ProductView">
    <font-awesome-icon class="pvButton" :icon="['fas', 'backward']" />
    <div class="pvProduct">
      <div class="pvTitle">
        <h3 class="pvName">
          {{ product.name }}
        </h3>
        <CgaPrice :price="product.price" class="pvPrice" />
      </div>
      <v-img
        :src="cCrePath(selectedCid)"
        aspect-ratio="1"
        class="pvImage"
      />
      <div class="pvCrList">
        <v-img
          v-for="cid in product.creativeIds"
          :key="cid"
          :src="cCrePath(cid)"
          aspect-ratio="1"
          class="pvCrImage"
          @click="changeSelectedCid(cid)"
        />
      </div>
      <div class="pvColor">
        <span v-for="(ccode, cname ) in product.color" :key="cname">
          {{ cname }}
        </span>
      </div>
      <div class="pvMessage">
        <p>
          {{ product.message }}
        </p>
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
  data: () => ({
    selectedCid: 0
  }),
  computed: {
    ...mapGetters('xd/shop/xdsshop', ['cCrePath'])
  },
  watch: {
    product: {
      immediate: true,
      handler () {
        if (this.$props.product !== null) {
          this.selectedCid = this.$props.product.topimage
        }
      }
    }
  },
  methods: {
    changeSelectedCid (cid) {
      this.selectedCid = cid
    }
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
    .pvCrList{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .pvCrImage{
        width:20%;
        flex-grow: 0;
      }
    }
    .pvTitle{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
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
