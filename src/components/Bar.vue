<template>
    <div class="bar">
      <h1>Bar</h1>
      <button @click="resetCount">Reset</button>
      <button @click="incrementAmount--">-</button>
      
      <md-field>
        <label>Initial Value</label>
        <md-input v-model="incrementAmount"></md-input>
      </md-field>

      <button @click="incrementAmount++">+</button>
      <button @click="incrementStoreCount">IncrementStore by {{incrementAmount}}</button>
      <p><i>Non readable verson </i>{{ count }}</p>
      <p><i>Readable verson </i>{{ countReadable }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { store } from './bar.service'

export default {    
  name: 'bar',
  beforeCreate() {
    this.$store.registerModule('barService', store);
    
  },
  data() {
    return {
      incrementAmount: 1
    }
  },
  computed: {
    ...mapGetters({
      count: 'barService/count',
      countReadable: 'barService/countReadable'
    })
  },
  methods: {
    incrementStoreCount() {
      this.$store.commit('barService/INCREMENT_COUNT', +this.incrementAmount)      
    },
    resetCount() {
      this.incrementAmount = 1;
      this.$store.commit('barService/RESET_COUNT')
    }
  },
  routes: {},
  destroyed() {
    this.$store.unregisterModule('barService')
  }
}
</script>
<style> @import './bar.scss'; </style>
