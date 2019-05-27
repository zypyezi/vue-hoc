
export default (wrappedComponent) => {
  return {
    // 创建html
    // $attrs 包含当前组件没有注册的props值
    // template: '<wrappedComponent v-on="$listeners" v-bind="$attrs" ></wrappedComponent>',
    components: {wrappedComponent},
    // props: ['props'],
    props: typeof wrappedComponent === 'function' // accept both a construtor and an options object
      ? wrappedComponent.options.props
      : wrappedComponent.props,
    mounted () {
      console.log(typeof wrappedComponent, '===')
      // console.log('I have already mounted', 'this is a hoc')
      // console.log('attrs', this.$attrs)
      // console.log(typeof this.$slots, this.$slots )
      // console.log(this.$options.render, 'this.$options.render')
    },
    // // render 用法
    render (h) {
      // vue 处理slot的机制
      // _self
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        .map(vnode => {
          vnode.context = this._self
          return vnode
        })
      // 这边使用template 和render 在props的传递上有区别
      return h(wrappedComponent, {
        on: this.$listeners,
        attr: this.$attrs,
        props: this.$props,
        scopedSlots: this.$scopedSlots
      }, slots)
    }
  }
}
