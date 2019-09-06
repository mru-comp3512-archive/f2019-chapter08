/* add code below this */

/* This function constructor encapsulates bill totals, tip calculations,
   and the output of both */
function Tipper() { 
    /* -------  Properties -------- */
    this.billTotals = [50.00, 150.00, 20.00, 500.00];
    this.tips = [];

    /* -------  methods -------- */

    // Responsible for calculating the tips for the bill totals
    this.calculate = function() {
        // loop through totals
        for (let total of this.billTotals) {
            // calculate tip amount and add to tips
            this.tips.push(this.calculateTip(total));
        }
    };

    // Caclulate an individual tip 
    this.calculateTip = function(total) {

        // calculate tips based on this logic:
        //   if total < 30, then tip = 30%
        //   if total between 30 and 75, then tip = 20%
        //   if total > 75, then tip = 10%
    
        var tip;
        if (total < 30)
            tip = total * 0.30;
        else if (total >= 30 && total <= 75)
            tip = total * 0.20;
        else
            tip = total * 0.10;
        return tip;
    };

    // Outputs each of the bill totals and tip amounts
    this.output = function() {
        for (let i=0; i < this.billTotals.length; i++) {
            console.log("For bill of $" + this.billTotals[i] + " the tip should be $" + this.tips[i]);
        }
    };

    // Calculates tips and outputs results
    this.generate = function() {
        this.calculate();
        this.output();
    }
}

// instantiate Tipper
var tipper = new Tipper();
tipper.generate();





