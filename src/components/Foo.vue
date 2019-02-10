<template>
    <div>
      <h1>Foo</h1>
      <code>{{ a }}</code> 
    </div>
</template>

<script>
export default {    
  name: 'foo',
  data () {
    return {
      a: { a: 'a', b: 'b' }
    }
  }
}
</script>
