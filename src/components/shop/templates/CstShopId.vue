<template>
  <CsoShopArea :v-if="cShop!==null">
    <CsoShopPanel
      v-for="(sf, index) in cShopStoreFronts"
      :key="index"
      :pagenumber="index"
      :storefront="sf"
    />
    <CsmFloatButtons
      :menus="[{
        key: 'next',
        title: '進む',
        icon: ['fas', 'forward'],
        clickfunc: nextClick
      },{
        key: 'share',
        title: 'シェア',
        icon: ['fas', 'share-alt'],
        clickfunc: () => { return null }
      },{
        key: 'cart',
        title: 'カート',
        icon: ['fas', 'shopping-cart'],
        clickfunc: () => { return null }
      }]"
    />
    <CsoModalBase v-if="isModalOn">
      <CsoCartView />
      <CsoProductView />
    </CsoModalBase>
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
      console.log('isModalOn')
      if (this.vProduct !== null) {
        return true
      }
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
      //
      console.log('next clicke')
      this.$store.dispatch('xd/general/xdslideshow/goNextStep')
    }
  }
}
</script>
<style scoped lang="scss">
</style>
