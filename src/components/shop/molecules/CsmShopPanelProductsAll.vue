<template>
  <CgmSlideshowPanel
    v-if="numProducts > 0"
    :pagenumber="pagenumber"
    class="cspProductsAll"
  >
    <CsaCreativeFill
      :v-if="storefront.creativeMaps.background"
      :cid="storefront.creativeMaps.background"
      :stylesets="['mZoom','cGrad']"
      :settings="{
        clGrad1: '#FF8000A0',
        clGrad2: '#FF000010',
        mvZoomL: '100%',
        mvZoomS: '200%',
        bgPosXY: '50% 50%'
      }"
      class="paBg"
    >
      <CsaTitle class="paTitle" :fontsize="2.2">
        All Products
      </CsaTitle>
      <div
        v-for="(pList, lIndex) in cProductsLists"
        :key="lIndex"
        class="paContainer"
      >
        <CsaPBox
          v-for="(p, pIndex) in pList"
          :key="p.id"
          :v-show="nElem === (lIndex + 1)"
          :product="p"
          :enumber="lIndex + 1"
          :apdelay="pIndex * 2"
          :class="[
            'paProduct',
            `pa--${pIndex}`,
            nElem === (lIndex + 1) ? 'paVis' : 'paInv'
          ]"
          :clickfunck="productClick"
        />
      </div>
    </CsaCreativeFill>
  </CgmSlideshowPanel>
</template>
<script>
import CgmSlideshowPanel from '@/components/general/molecules/CgmSlideshowPanel.vue'
import CsaTitle from '@/components/shop/atoms/CsaTitle.vue'
import CsaCreativeFill from '@/components/shop/atoms/CsaCreativeFill.vue'
import CsaPBox from '@/components/shop/atoms/CsaPBox.vue'
const { mapGetters } = require('vuex')
const cfShops = require('~/classes/cfShops.js')
export default {
  name: 'CsmShopPanelProductsAll',
  components: {
    CgmSlideshowPanel,
    CsaCreativeFill,
    CsaTitle,
    CsaPBox
  },
  props: {
    storefront: {
      type: cfShops.CsFront,
      default: () => { return new cfShops.CsFront('undef') }
    },
    pagenumber: {
      type: Number,
      default: 0
    },
    pc1page: {
      type: Number,
      default: 10
    },
    sp1page: {
      type: Number,
      default: 3
    }
  },
  computed: {
    ...mapGetters('xd/shop/xdsshop', ['cProducts']),
    ...mapGetters('xd/general/xdslideshow', ['nElem']),
    cProductsLists () {
      console.log('numProductsListNum')
      const np1p = this.numProductsOnePage
      const cpArray = Object.keys(this.cProducts).map((pid) => { return this.cProducts[pid] })
      const ret = []
      for (let lNum = 0; lNum < this.numProductsList; lNum++) {
        ret.push(cpArray.slice(lNum * np1p, lNum * np1p + np1p))
      }

      return ret
    },
    numProducts () {
      console.log('Products All num Product')
      if (this.cProducts === null) {
        return 0
      }
      return Object.keys(this.cProducts).length
    },
    numProductsOnePage () {
      if (window.innerWidth <= 768) {
        return this.$props.sp1page
      } else {
        return this.$props.pc1page
      }
    },
    numProductsList () {
      if (this.numProducts === 0) {
        return 0
      }
      return Math.ceil(this.numProducts / this.numProductsOnePage)
    }
  },
  created () {
    console.log('created products all')
    // this.$store.dispatch('xd/shop/xdsshop/setCreativesByIds', this.$props.storefront.creativeIds)
  },
  methods: {
    numProductsListNum (lNum) {
      console.log('numProductsListNum')
      const np1p = this.numProductsOnePage
      const cpArray = Object.keys(this.cProducts).map((pid) => { return this.cProducts[pid] })
      return cpArray.slice(lNum * np1p, lNum * np1p + np1p)
    },
    productClick (pid) {
      console.log('product click ' + pid)
      this.$store.dispatch('xd/shop/xdsshop/setViewPid', pid)
    }
  }
}
</script>
<style scoped lang="scss">
.cspProductsAll{
  .paBg{
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 60px 1rem 1rem 1rem;
    .paTitle{
      margin: 0.5rem 0;
      mix-blend-mode: hard-light;
    }
    .paContainer{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .paProduct{
        width: 49%;
      }
      .paProduct.paVis{
        transition: 0.2s;
        animation-delay: 0.1s;
      }
      .paProduct.paInv{
        transition: 0.1s;
        animation-delay: 0;
        height: 0;
        margin: 0;
        padding: 0;
        overflow: hidden;
        border: none;
        @include tShadow-none();
        * {
          margin: 0;
          padding: 0;
          line-height: 0;
          height: 0;
          display: inline-block;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
