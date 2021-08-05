/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-domain").innerHTML = generateDomain();
  });
};

let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "best", "premium", "vip", "top"];
  let noun = ["computer", "sofa", "carpet", "bottle", "bed"];
  let extension = [".com", ".net", ".org", ".info"];
  let sumParts = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          sumParts +=
            pronoun[i] + adj[j] + noun[k] + extension[l] + "<br></br>";
        }
      }
    }
  }
  return sumParts;
};
