/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function generateExcuse() {
    let whoIndex = getRandomIndex(who);
    let actionIndex = getRandomIndex(action);
    let whatIndex = getRandomIndex(what);
    let whenIndex = getRandomIndex(when);

    return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  }

  document.getElementById("excuse").innerHTML = generateExcuse();
};
