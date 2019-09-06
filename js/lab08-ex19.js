
/* To refresh your memory, here are two complex objects created using
   object literal syntax. If we have many objects with the same structure,
   this is a time- and space-consuming way of doing so.
   */

const apple = {
   symbol: "AAPL",
   name: "Apple Inc.",
   location: {
      address: "One Apple Park Way",
      city: "Cupertino"
   }
}

const google = {
   symbol: "GOOG",
   name: "Alphabet Inc.",
   location: {
      address: "1600 Amphitheatre Parkway",
      city: "Mountain View"
   }
}

/* after this add your own code */

function Company(symbol, name, address, city) {
   this.symbol = symbol;
   this.name = name;
   this.location = {};
   this.location.address = address;
   this.location.city = city;
   this.output = function() {
      console.log(`${this.symbol} - ${this.name}`);
   }
}

const apple2 = new Company("AAPL","Apple Inc.","One Apple Park Way","Cupertino");
const google2 = new Company("GOOG","Alphabet Inc.","1600 Amphitheatre Parkway","Mountain View");

console.log(apple2);
console.log(apple2.location.address);

apple2.output();

const companies = [
   new Company("AAPL","Apple Inc.","One Apple Park Way","Cupertino"),
   new Company("FB","Facebook Inc.","1 Hacker Way","Menlo Park"),
   new Company("PYPL","PayPal Holdings Inc.","2211 N. 1st St.","San Jose"),
   new Company("MSFT","Microsoft Corporation","One Microsoft Way","Redmond")
];

for (let c of companies) {
   c.output();
}