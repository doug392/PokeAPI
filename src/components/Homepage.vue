<template>
  <div id="Homepage">
    <md-field>
      <label>Enter Pokemon Here</label>
      <md-input v-model="sPoke"></md-input>
    </md-field>
    <md-button v-on:click="consolelogpokemon()" class="md-raised">Submit</md-button>
    <div>
      <img src="" id="sprite" alt="Pokemon Pic Should Appear Here">
      </div>
    <div>
    <table id="abilities">
      <tr>
        <th>Abilities</th>
      </tr>
    </table>
    <table id="moves">
      <tr>
        <th>Moves</th>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { pokeFunctions } from "../JS/PokeAPI";
import store from "../store";
export default {
  name: "Homepage",
  components: {},
  data: function() {
    return {
      sPoke: "",
      sResult: store.state.pokemondata,
    };
  },
  computed: {
    
  },
  methods: {
    async consolelogpokemon() {
      console.log(this.sPoke);
      await pokeFunctions.getPokemon(this.sPoke);
      this.populateabilities();
      this.populatemoves();
      this.populatesprite();
    },
    populateabilities() {
      var abilitiestable = document.getElementById("abilities");
      for (let poke in store.state.pokemondata.abilities) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var cellcontent = document.createTextNode(
          store.state.pokemondata.abilities[poke].ability.name
        );
        cell.appendChild(cellcontent);
        row.appendChild(cell);
        abilitiestable.appendChild(row);
      }
    },
    populatemoves(){
      var movestable = document.getElementById("moves");
      for (let poke in store.state.pokemondata.moves) {
         var row = document.createElement("tr");
        var cell = document.createElement("td");
        var cellcontent = document.createTextNode(
          store.state.pokemondata.moves[poke].move.name
        );
        cell.appendChild(cellcontent);
        row.appendChild(cell);
        movestable.appendChild(row);

      }
    },
    populatesprite(){
      var spriteurl = store.state.pokemondata.sprites.front_default;
      document.getElementById("sprite").src = spriteurl;
      console.log(spriteurl)
      }
      
  }
};
</script>

<style>
</style>
