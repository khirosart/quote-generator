// Array or words
const quotes = [
  "Love is composed of a single soul inhabiting two bodies",
  "Whosoever is delighted in solitude is either a wild beast or a god",
  "Hope is a waking dream",
  "There is no great genius without some touch of madness",
  "A friend to all is a friend to none",
  "The worst form of inequality is to try to make unequal things equal",
];
// FUnction to generate quotes
function newQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNum];
}
