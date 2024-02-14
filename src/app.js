/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  const pronouns = ["my", "your", "their"];
  const adjs = ["fantabulous", "amazing", "great"];
  const nouns = ["artiste", "designer", "website"];
  const verbs = ["smiling", "laughing", "running"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let verb of verbs) {
          console.log(pronoun, adj, noun, verb);
          document.getElementById(
            "results"
          ).innerHTML += `<li>${pronoun}${adj}${noun}${verb}</li>`;
        }
      }
    }
  }
};
