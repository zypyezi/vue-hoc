


<script>
import BaseComponent from './base-vue-component'
 export default  (createElement) => {
    return createElement(
      BaseComponent,
      {
        props:this.props
      }
    )
  }
</script>

<style scoped>
</style>