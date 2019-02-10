<template>
    <div class="bar">
      <h1>Bar</h1>
      <button @click="resetStoreCount">Reset</button>
      <input type="text" v-model="incrementAmount"> 
      <button @click="incrementStoreCount">IncrementStore</button>
      <p><i>Non readable verson </i>{{ count }}</p>
      <p><i>Readable verson </i>{{ countReadable }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {    
  name: 'bar',
  data() {
    return {
      incrementAmount: 1
    }
  },
  computed: {
    ...mapGetters([
      'count',
      'countReadable'
    ])
  },
  methods: {
    incrementStoreCount() {
      this.$store.commit('incrementCount', +this.incrementAmount)      
    },
    resetStoreCount() {
      this.$store.commit('resetCount')
    }
  },
  routes: {}
}
</script>
<style> @import './bar.scss'; </style>
