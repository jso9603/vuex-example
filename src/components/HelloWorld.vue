<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div id="app">
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    count () {
	    return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
    	this.$store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
