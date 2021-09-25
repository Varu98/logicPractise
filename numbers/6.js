/* Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

Input: CP = 1500, SP = 2000
Output: 500 Profit

Input: CP = 3125, SP = 1125
Output: 2000 Loss */

let cp, sp;

const readlineSync = require("readline-sync");

cp = readlineSync.question("enter Cost Price: ");
cp = parseInt(cp);
sp = readlineSync.question("enter Selling Price: ");
sp = parseInt(sp);

function calculateProfitLoss(profit, loss) {
  if (cp === sp) {
    console.log(`No Gain No Pain (^.^)`);
  } else if (cp < sp) {
    profit = sp - cp;
    console.log(`Congrats!! You made a Profit of ${profit}`);
  } else {
    loss = cp - sp;
    console.log(`You made a Loss of ${loss}`);
  }
}
calculateProfitLoss();
