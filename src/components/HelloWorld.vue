<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>
      Discover A Cornucopia Of Moves and Abilities
    </h2>
    <form action="https://pokeapi.co/api/v2/pokemon/" + sPoke>
      Enter Pokemon Name Here: <input type="text" name ="Pokemon" value= sPoke>
      <input type="submit" value="submit" onclick= PokeAPI.js>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
