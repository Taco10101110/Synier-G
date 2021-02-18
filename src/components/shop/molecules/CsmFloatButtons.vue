<template>
  <div class="CsmFbs">
    <div
      v-for="(menuArray, i) in fbArys"
      :key="i"
      class="fbsNum"
    >
      <div
        v-for="menu in menuArray"
        :key="menu.key"
        class="fbsButton fbsBtn--grass"
        fab
        dark
        middium
        @click="menu.clickfunc()"
      >
        <font-awesome-icon
          class="fbsIcon"
          :icon="menu.icon"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CsmFloatButtons',
  props: {
    menus: {
      type: Array,
      default: () => [{
        key: 'basic',
        title: '基本',
        icon: '',
        num: 0,
        vis: true,
        clickfunc: () => { return null }
      }]
    }
  },
  computed: {
    fbArys () {
      const ret = []
      this.$props.menus.forEach((m) => {
        if (m.vis === true) {
          while (ret.length <= m.num) {
            ret.push([])
          }
          ret[m.num].push(m)
        }
      })
      return ret
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
.CsmFbs{
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  flex-direction: column-reverse;
  .fbsNum{
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: flex-end;
    .fbsButton{
      margin-top: 0.5rem;
      margin-left: 0.5rem;
      font-size: 1.6rem;
      width: 3rem;
      height: 3rem;
      box-shadow: 2px 2px 0px 0px  rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .fbsIcon{
        font-size: 1.6rem;
        animation: neon 10s infinite both;
        --shadow-color: rgb(255, 255, 255);
        --shadow-color-light:  rgba(255, 255, 255, 0.4);
        color: var(--shadow-color);
      }
    }
    &:first-child .fbsButton:first-child{
      width: 5rem;
      height: 5rem;
      .fbsIcon{
        font-size: 2.6rem;
        --shadow-color: rgba(255, 145, 0, 1);
      }
    }
    @include mq(xs){
      .fbsButton{
        margin-top: 0.3rem;
        margin-left: 0.3rem;
        font-size: 1.2rem;
        width: 2rem;
        height: 2rem;
        .fbsIcon{
          font-size: 1.2rem;
        }
      }
      &:first-child .fbsButton:first-child{
        width: 3rem;
        height: 3rem;
        .fbsIcon{
          font-size: 1.8rem;
        }
      }

    }
    .fbsButton.fbsBtn--grass{
      background-color: #00000040;
      border: 1px rgb(100, 100, 100) solid;
      backdrop-filter: blur(5px);
    }
    .fbsButton.fbsBtn--black{
      background:
        repeating-conic-gradient(
          rgba(0, 0, 0, 0.7) 0,
          rgba(0, 0, 0, 0.7) 4%,
          rgba(40, 40, 40, 0.7) 5%,
          rgba(0, 0, 0, 0.7) 6%,
          rgba(0, 0, 0, 0.7) 50%
        ),
        repeating-radial-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(220, 220, 220, 1) 1%,
          rgba(0, 0, 0, 1) 2%,
          rgba(0, 0, 0, 1) 3%,
          rgba(0, 0, 0, 1) 5%
        );
    }
  }
}
@mixin glow($lsize:0px, $gsize:0px) {
  filter:
    drop-shadow(0px 0px 1px var(--shadow-color))
    drop-shadow(0px 0px 3px var(--shadow-color-light))
    drop-shadow(0px 0px $lsize var(--shadow-color-light));
}
@keyframes neon {
  0%   { @include glow(0px, 0px); }
  100% { @include glow(0px, 0px); }
}
</style>
