/* eslint-disable no-console */
import store from "../store"

class pokeFunctions {
    static async getPokemon(sPoke) {
      const request = require('request-promise');


      request('https://pokeapi.co/api/v2/pokemon/' + sPoke, { json: true })
      .then(function (res) {console.log(res)
          store.commit("setpokemondata",res);})
      .catch(function (err) { if (err) { return console.log(err); } })

      //    console.log("<====ABILITIES====>")
      //   for (let poke in res.body.abilities) {
      //     console.log(res.body.abilities[poke].ability.name)
      //    }
      //    console.log("<====MOVES====>")
      //     for(let poke in res.body.moves) {
      //         console.log(res.body.moves[poke].move.name)
      //    }
      


   }
}

export { pokeFunctions }




