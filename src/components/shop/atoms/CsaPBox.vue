<template>
  <div v-if="product !== null" class="pBox">
    <CgmSlideshowElem :fillmode="'backwards'" :enumber="enumber" :apdelay="apdelay+4" :apstyle="'RtoL'">
      <h3 class="pbTitle">
        {{ product.name }}
      </h3>
    </CgmSlideshowElem>
    <CgmSlideshowElem :fillmode="'backwards'" :enumber="enumber" :apdelay="apdelay" :apstyle="'JustFade'">
      <!--
      <CgmCreativeBox
        :src="cCrePath(product.topimage)"
      />
      -->
      <v-img
        :src="cCrePath(product.topimage)"
        aspect-ratio="1"
        class="pbImage"
      />
    </CgmSlideshowElem>
    <CgmSlideshowElem :fillmode="'backwards'" :enumber="enumber" :apdelay="apdelay+2" :apstyle="'RtoL'">
      <CgaPrice :price="product.price" class="pbPrice" />
    </CgmSlideshowElem>
  </div>
</template>
<script>
import CgmSlideshowElem from '@/components/general/molecules/CgmSlideshowElem.vue'
// import CgmCreativeBox from '@/components/general/molecules/CgmCreativeBox.vue'
import CgaPrice from '@/components/general/atoms/CgaPrice.vue'
const { mapGetters } = require('vuex')
export default {
  name: 'CsaPBox',
  components: {
    CgmSlideshowElem,
    // CgmCreativeBox,
    CgaPrice
  },
  props: {
    product: {
      type: Object,
      default: null
    },
    enumber: {
      type: Number,
      default: 0
    },
    apstyle: {
      type: String,
      default: 'basicFade'
    },
    apdelay: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters('xd/shop/xdsshop', ['cProducts', 'cCrePath'])
  },
  methods: {
    /*
    reqImgSrc (src) {
      return require(src)
    }
    */
  }
}
</script>
<style scoped lang="scss">
.pBox {
  // padding: 0.2rem;
  //margin-bottom: 1rem;
  // background-color: yellow;
  margin: 0.5rem 0;
  border-radius: 3px;
  @include tGlass-bg();
  @include tShadow-z2();
  .pbPrice, .pbTitle{
    // @include tGlass-bg();
    // @include tShadow-z1();
    border-radius: 2px;
    font-size: 0.8rem;
    text-align: center;
    text-overflow: ellipsis;
    white-space: normal;
    padding: 0.2rem;
  }
  .pbTitle{
    width: 100%;
    height: 2.6rem;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.1rem;
  }
  .pbImage{
    filter: chroma(#fff);
  }
  .pbPrice{
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
