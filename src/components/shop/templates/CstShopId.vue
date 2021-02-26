<template>
  <CsoShopArea :v-if="cShop!==null">
    <CsoShopPanel
      v-for="(sf, index) in cShopStoreFronts"
      :key="index"
      :pagenumber="index"
      :storefront="sf"
    />
    <CsoModalBase :modalon="isModalOn">
      <CsoCartView v-if="isCartView" />
      <CsoProductView v-if="isProductView" :product="vProduct" />
    </CsoModalBase>
    <CsmFloatButtons
      :menus="[{
        key: 'cart',
        title: 'カート',
        icon: ['fas', 'shopping-cart'],
        num: 0,
        size: 'S',
        vis: true,
        clickfunc: () => { return null }
      },{
        key: 'share',
        title: 'シェア',
        icon: ['fas', 'share-alt'],
        num: 0,
        size: 'S',
        vis: true,
        clickfunc: () => { return null }
      },{
        key: 'next',
        title: '進む',
        icon: ['fas', 'forward'],
        num: 0,
        size: 'L',
        vis: !isModalOn,
        clickfunc: nextClick
      },{
        key: 'before',
        title: '戻る',
        icon: ['fas', 'backward'],
        num: 0,
        size: 'S',
        vis: !isModalOn,
        clickfunc: backClick
      },{
        key: 'buy',
        title: '買う',
        icon: ['fas', 'cart-arrow-down'],
        num: 0,
        size: 'L',
        vis: isModalOn,
        clickfunc: nextClick
      },{
        key: 'close',
        title: '閉じる',
        icon: ['fas', 'times'],
        num: 0,
        size: 'S',
        vis: isModalOn,
        clickfunc: closeClick
      }]"
    />
  </CsoShopArea>
</template>
<script>
import CsmFloatButtons from '@/components/shop/molecules/CsmFloatButtons.vue'
import CsoModalBase from '@/components/shop/organisms/CsoModalBase.vue'
import CsoProductView from '@/components/shop/organisms/CsoProductView.vue'
import CsoCartView from '@/components/shop/organisms/CsoCartView.vue'
import CsoShopArea from '@/components/shop/organisms/CsoShopArea.vue'
import CsoShopPanel from '@/components/shop/organisms/CsoShopPanel.vue'
// import CsmShopArea from '@/components/shop/molecules/CsmShopArea.vue'
// import CgmSlideshowBase from '@/components/general/molecules/CgmSlideshowBase.vue'
// import CsmShopPanel1stView from '@/components/shop/molecules/CsmShopPanel1stView.vue'
const { mapGetters } = require('vuex')
export default {
  name: 'CstShopId',
  components: {
    CsmFloatButtons,
    CsoShopArea,
    CsoShopPanel,
    CsoModalBase,
    CsoProductView,
    CsoCartView
  },
  props: {
    sid: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters('xd/shop/xdsshop', ['cShop', 'cShopStoreFronts', 'vProduct']),
    isModalOn () {
      return this.isCartView || this.isProductView
    },
    isProductView () {
      if (this.vProduct !== null) {
        return true
      }
      return false
    },
    isCartView () {
      return false
    }
  },
  mounted () {
    console.log('Cst shop id mounted')
    this.$store.dispatch('xd/shop/xdsshop/resetCShop')
    this.$store.dispatch('xd/shop/xdsshop/resetCBrand')
    this.$store.dispatch('xd/shop/xdsshop/resetCProducts')
    this.$store.dispatch('xd/shop/xdsshop/resetCCreatives')
    this.$store.dispatch('xd/shop/xdsshop/setCShop', this.$props.sid)
  },
  beforeDestroy () {
    console.log('Cst shop id beforeDestroy')
    this.$store.dispatch('xd/shop/xdsshop/resetCShop')
    this.$store.dispatch('xd/shop/xdsshop/resetCBrand')
    this.$store.dispatch('xd/shop/xdsshop/resetCProducts')
    this.$store.dispatch('xd/shop/xdsshop/resetCCreatives')
  },
  methods: {
    nextClick () {
      console.log('next click')
      this.$store.dispatch('xd/general/xdslideshow/goNextStep')
    },
    backClick () {
      console.log('back click')
      this.$store.dispatch('xd/general/xdslideshow/goPrevStep')
    },
    closeClick () {
      console.log('close click')
      this.$store.dispatch('xd/shop/xdsshop/setViewPid', 0)
    }
  }
}
</script>
<style scoped lang="scss">
</style>
