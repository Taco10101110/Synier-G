<template>
  <CgmHeaderBase
    v-if="cShop!==null"
    class="ShopHeader"
    :logo="cShop.logo"
    :title="`${cShop.name} オンラインショップ`"
    :navi="false"
  >
    <div class="shMenus">
      <p>
        ABOUT
      </p>
      <p>
        CONTACT
      </p>
      <div
        class="shMngButton"
        @click="onMngBtnClick"
      >
        管理者
      </div>
    </div>
  </CgmHeaderBase>
</template>
<script>
import CgmHeaderBase from '@/components/general/molecules/CgmHeaderBase.vue'
const { mapGetters } = require('vuex')
export default {
  name: 'CsoHeader',
  components: {
    CgmHeaderBase
  },
  computed: {
    ...mapGetters('xd/shop/xdsshop', ['cShop', 'cLinkShopCreate'])
  },
  methods: {
    onMngBtnClick () {
      this.$router.push(this.cLinkShopCreate)
    }
  }
}
</script>
<style scoped lang="scss">
.ShopHeader{
  backdrop-filter: blur(5px);
  background-color: #00000040;
  border-bottom: 1px rgb(100, 100, 100) solid;
  .shTitle{
    max-width: 30%;
  }
  .shMenus{
    display: flex;
    align-items: center;
    p{
      font-size: 0.8rem;
      margin: 0 0.3rem;
      color: white;
      text-shadow: 0 0 1px white;
      letter-spacing: 0.05rem;
    }
    .shMngButton{
      background: orange;
      color: white;
      font-size: 0.6rem;
      padding: 0.5rem;
      border-radius: 3px;
      filter: drop-shadow(1px 1px 1px black);
    }
  }
}
</style>
