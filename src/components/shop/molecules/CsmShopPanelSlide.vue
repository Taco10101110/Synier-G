<template>
  <CgmSlideshowPanel :pagenumber="pagenumber">
    <div class="Slide">
      <CgmSlideshowElem
        v-for="(cid, i) in storefront.creativeIds"
        :key="i"
        class="slElem"
        :enumber="1"
        :apdelay="(i) + 2"
        :apstyle="'RtoL'"
      >
        <CsaCreativeFill
          :cid="cid"
          :stylesets="['mSwin']"
          :settings="{
            mvZoomL: `${100+(Math.floor(Math.random() * 80))}%`,
            bgPosXY: `${10+(Math.floor(Math.random() * 80))}% ${10+(Math.floor(Math.random() * 80))}%`
          }"
          :class="['slCreative', `slCr--${i}`]"
        />
      </CgmSlideshowElem>
    </div>
  </CgmSlideshowPanel>
</template>
<script>
import CgmSlideshowPanel from '@/components/general/molecules/CgmSlideshowPanel.vue'
import CsaCreativeFill from '@/components/shop/atoms/CsaCreativeFill.vue'
const cfShops = require('~/classes/cfShops.js')
export default {
  name: 'CsmShopPanelSlide',
  components: {
    CgmSlideshowPanel,
    CsaCreativeFill
  },
  props: {
    storefront: {
      type: cfShops.CsFront,
      default: () => { return new cfShops.CsFront('undef') }
    },
    pagenumber: {
      type: Number,
      default: 0
    }
  },
  created () {
  },
  updated () {
  }
}
</script>
<style scoped lang="scss">
.Slide{
  width: 100%;
  height: 115%;
  margin-top:-15%;
  display: flex;
  @include mq(xs){ flex-direction: column; }
  @include mq(sp){ flex-direction: column; }
  @include mq(tb){ flex-direction: column; }
  @include mq(pc){ flex-direction: row; }
  @include mq(xl){ flex-direction: row; }
  .slElem{
    flex-grow: 1;
    .slCreative{
      height: 120%;
      width: 100%;
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
    }
  }
}
</style>
