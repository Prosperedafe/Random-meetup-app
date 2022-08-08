let seniorDevs = ["Mcdavid", "Samuel", "Green", "Anayo", "Prosper", "VoN"];
let juniorDevs = ["Funmi", "Mary", "Hope", "Salvation", "Glory", "Rachael"];
let places = ["Paris", "Royal Albert Hall", "Ekohotel", "Beach"];

function getRandom(arr1, arr2, arr3) {
  const result1 = arr1[Math.floor(Math.random() * arr1.length)];
  const result2 = arr2[Math.floor(Math.random() * arr2.length)];
  const result3 = arr3[Math.floor(Math.random() * arr3.length)];
  return `${result1} and ${result2} will be going on a dinner at ${result3}.`;
}

const paraElem = document.getElementById("Meetup");
const randomText = getRandom(seniorDevs, juniorDevs, places);
paraElem.innerHTML = randomText;
console.log(getRandom(seniorDevs, juniorDevs, places));
