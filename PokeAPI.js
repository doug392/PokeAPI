const request = require('request');
var sPoke = "charmander";
 
request('https://pokeapi.co/api/v2/pokemon/'+ sPoke, {json:true} , (err, res) => {
   if (err) { return console.log(err); }
   console.log("<====ABILITIES====>")
   for (let poke in res.body.abilities) {
    console.log(res.body.abilities[poke].ability.name)
   }
   console.log("<====MOVES====>")
    for(let poke in res.body.moves) {
        console.log(res.body.moves[poke].move.name)
   }
});





