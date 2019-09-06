
/* To refresh your memory, here is a complex objects created using
   object literal syntax.
   */

const stock = {
   symbol: "AAPL",
   name: "Apple Inc.",
   location: {
      address: "One Apple Park Way",
      city: "Cupertino",
      output() {
         console.log(`${this.address} - ${this.city}`);
      }      
   },
   output: function () {
      console.log(`${this.symbol} - ${this.name}`);
   },

};

stock.output();
stock.location.output();
