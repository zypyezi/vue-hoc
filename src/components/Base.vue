<template>
  <div class="hello">
      <div @click="handleClick">
        {{msg}}
      </div>
    <div>
      prop属性 :{{props}}
    </div>
    <div>
        <slot name="slot1"></slot>
        <p>=====================</p>
        <slot></slot>
        <p>=====================</p>
        <slot name="slot2" :scopedata="scopedata"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Base',
  props: ['props'],
  created () {
    console.log('attrs -- ', this.$attrs)
    console.log(this.$options.render, 'template to render')
    // console.log(this.$vnode, 'vnode')
    // console.log(this.$vnode.context, 'vnode')
  },
  mounted () {

    // console.log('I have already mounted', 'this is a wrappedcomponent')
    // console.log('slots', this.$slots )
    //  console.log(this.$vnode, 'this.$vnode')
      // console.log(this.$vnode.context === this.$vnode.componentOptions.children[0].context)
  },
  data () {
    return {
      msg: '点击我触发事件',
      scopedata: [
        'scope slot 1',
        'scope slot 2',
        'scope slot 3'
      ]
    }
  },
  methods: {
    handleClick () {
      console.log('clicked ')
    }
  }
}
</script>

<style scoped>

</style>
