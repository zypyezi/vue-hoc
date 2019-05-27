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
        <p>========================</p>
        <slot></slot>
        <p>========================</p>
        <slot name="slot2" :scopedata="scopedata"></slot>
    </div>

  </div>
</template>

<script>
import mixin from '../mixin/index'
export default {
  name: 'base-component',
  props: ['props'],
  created () {
  },
  mixins: [mixin],
  mounted () {
    console.log('I have already mounted', 'this is a vue component')
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
