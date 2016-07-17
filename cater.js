const CANDIES_FOR_EVOLVE = 25;

var pokes = 49;
var candies = 153;

var total_evolves = 0;
var total_transfers = 0;

var evolves, transfers;

while(pokes > 0 && candies > 0 && ((candies/CANDIES_FOR_EVOLVE)|0) > 0){
  evolves = 0;
  transfers = 0;
  while(pokes > 0 && candies > 0 && ((candies/CANDIES_FOR_EVOLVE)|0) > 0) {
    evolves = ((candies/CANDIES_FOR_EVOLVE)|0);
    candies -= (evolves * CANDIES_FOR_EVOLVE);
    candies += evolves; // gained from evolve
    candies += evolves; // gained from transferin
    pokes   -= evolves; // transfer and evolve
    total_evolves += evolves;
  }
  if(pokes > 0 && pokes >= (CANDIES_FOR_EVOLVE - candies)) {
    transfers = (CANDIES_FOR_EVOLVE - candies);
    pokes -= transfers;
    candies += transfers;
    total_transfers += transfers;
  }
}

console.log('total_evolves:', total_evolves, 'total_transfers', total_transfers);
