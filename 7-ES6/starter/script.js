class Elements {
  constructor(name, buildYear) {
    (this.name = name), (this.buildYear = buildYear);
  }
}

class Parks extends Elements {
  constructor(name, buildYear, numTrees, parkArea) {
    super(name, buildYear);
    (this.numTrees = numTrees), (this.parkArea = parkArea);
  }
  density() {
    const density = this.numTrees / this.parkArea;
    console.log(`${this.name} has a density of ${density}`);
  }
  /* moreThen() {
    if (this.numTrees > 50) {
      console.log(`${this.name} has more then 50 trees.`);
    }
  } */
}

class Streets extends Elements {
  constructor(name, buildYear, streetLength, size = 3) {
    super(name, buildYear);
    (this.streetLength = streetLength), (this.size = size);
  }
  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(`${this.name} is ${classification.get(this.size)}.`);
  }
}
park1 = new Parks("Hyde park", 1990, 40, 400);
park2 = new Parks("Big park", 1970, 100, 200);
park3 = new Parks("Little park", 1980, 60, 300);
street1 = new Streets("Lewis street", 1960, 400, 1);
street2 = new Streets("Mark street", 1940, 800, 2);
street3 = new Streets("Gworge street", 1920, 900, 3);
street4 = new Streets("Cherry street", 1950, 300, 4);
const allparks=[park1, park2];
const allstreets =[street1, street2, street3, street4];
function reportParks(p){
  
  const den = p.forEach(element=>element.density());
  console.log(den);
  ;
  
}
// function reportStreets(s){
// }

reportParks(allparks);
// reportStreets(allstreets);