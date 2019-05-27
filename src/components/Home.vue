<template>
  <div class="hello">
      <div class="block">
        <base-component :props="props">
            <h2 slot="slot1">BaseComponent slot</h2>
              <p>default slot</p>
              <template  slot="slot2" slot-scope="scopedata">
                  <p v-for="item of scopedata.scopedata" :key="item">
                    {{item}}
                  </p>
              </template>
          </base-component>
      </div>
    <div class="block">
      <!-- <EnhanceComponent :props="props">
          <h2 slot="slot1">BaseComponent slot</h2>
          <p>default slot</p>
          <template slot="slot2" slot-scope="scopedata">
              <p v-for="item of scopedata.scopedata" :key="item">
                  {{item}}
              </p>
          </template>
      </EnhanceComponent> -->
    </div>
    <div class="block">
        <FEnhanceComponent :props="props">
          <h2 slot="slot1">BaseComponent slot</h2>
          <p>default slot</p>
          <template slot="slot2" slot-scope="scopedata">
              <p v-for="item of scopedata.scopedata" :key="item">
                  {{item}}
              </p>
          </template>
        </FEnhanceComponent>
    </div>
  </div>
</template>

<script>
import BaseComponent from './base-vue-component'
import FComponent from './FComponent'
import Base from './Base'
import hoc from '../hoc/index'
const EnhanceComponent = hoc(Base)
const FEnhanceComponent = hoc(FComponent)
export default {
  name: 'Home',
  components: {Base, EnhanceComponent, BaseComponent, FComponent, FEnhanceComponent},
  data () {
    return {
      props: 'this is a prop'
    }
  },
  methods: {
  },
  created () {
    console.log('base-component', Base)
  }
}
</script>

<style scoped>
    .block{
      padding: 20px;
      border: 1px solid #ccc;
      margin: 20px;
    }
</style>
