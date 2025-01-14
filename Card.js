export default class Card {
  constructor(link, name) {
    (this.link = link), (this.name = name);
  }
}
const carta1 = new Card(
  "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  "Valle de Yosemite"
);

console.log(carta1);
