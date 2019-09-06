/* add code below this */

// parse the JSON string
const companies = JSON.parse(content);
// now output a card for each company
for (let company of companies) {
   outputCard(company);
}



/*
 Outputs the markup for a single stock/company
*/
function outputCard(company) {

   const outputTag = function(tag) {
      document.write(`<small>${tag}</small>`);
   };

   let acct = new AcctCalculations(company);
   document.write(`<article class="card">`);
   document.write(`<h2>${company.symbol} - ${company.companyName}</h2>`);
   document.write(`<div>`);
   document.write(`<p>Share Price (50day avg): <span>${acct.day50()}</span></p>`);
   document.write(`<p>Share Price (200day avg): <span>${acct.day200()}</span></p>`);
   document.write(`<p>Market Cap (50day avg): <span>${acct.marketCap50()}</span></p>`);
   document.write(`<p>Market Cap (200day avg): <span>${acct.marketCap200()}</span></p>`);
   document.write(`<p>Net Revenue: <span>${acct.revenue()}</span></p>`);
   document.write(`<p>Shareholder Equity: <span>${acct.equity()}</span></p>`);
   document.write(`</div>`);
   document.write(`<footer>`);
   for (let tag of company.tags) {
      outputTag(tag);
   }
   document.write(`</footer>`);
   document.write(`</article>`);

}


/*
 Encapsulates the accounting calculations for a stock/company
*/
function AcctCalculations(company) {

   const currency = function(num) {
      return new Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD'}).format(num);
   };

   this.day50 = function () {
      return currency(company.stats.day50MovingAvg);
   };

   this.day200 = function () {
      return currency(company.stats.day200MovingAvg);
   };

   this.revenue = function () {
      return currency(company.stats.operatingRevenue - company.stats.costOfRevenue);
   };
   
   this.marketCap50 = function () {
      return currency(company.stats.day50MovingAvg * company.stats.sharesOutstanding);
   };
   
   this.marketCap200 = function () {
      return currency(company.stats.day200MovingAvg * company.stats.sharesOutstanding);
   };
   
   this.equity = function () {
      return currency(company.stats.totalAssets - company.stats.totalLiabilities);
   };
}


/* SIMPLE FUNCTIONAL APPROACH

function outputCard(company) {
   document.write(`<article class="card">`);
   document.write(`<h2>${company.companyName}</h2>`);
   document.write(`<div>`);
   document.write(`<p>Share Price (50day avg): <span>${currency(company.stats.day50MovingAvg)}</span></p>`);
   document.write(`<p>Share Price (200day avg): <span>${currency(company.stats.day200MovingAvg)}</span></p>`);
   document.write(`<p>Market Cap (50day avg): <span>${calcMarketCap50(company)}</span></p>`);
   document.write(`<p>Market Cap (200day avg): <span>${calcMarketCap200(company)}</span></p>`);
   document.write(`<p>Net Revenue: <span>${calcRevenue(company)}</span></p>`);
   document.write(`<p>Shareholder Equity: <span>${calcEquity(company)}</span></p>`);
   document.write(`</div>`);
   document.write(`<footer>`);
   for (let tag of company.tags) {
      outputTag(tag);
   }
   document.write(`</footer>`);
   document.write(`</article>`);
} 

function calcRevenue(company) {
   return currency(company.stats.operatingRevenue - company.stats.costOfRevenue);
}

function calcMarketCap50(company) {
   return currency(company.stats.day50MovingAvg * company.stats.sharesOutstanding);
}

function calcMarketCap200(company) {
   return currency(company.stats.day200MovingAvg * company.stats.sharesOutstanding);
}

function calcEquity(company) {
   return currency(company.stats.totalAssets - company.stats.totalLiabilities);
}

*/








