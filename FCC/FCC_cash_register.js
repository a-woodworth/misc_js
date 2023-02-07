const MONEY_TABLE = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  'ONE HUNDRED' : 10000
};

function checkCashRegister(price, cash, cid) {
  const changeDue = cash - price;
  // convert to cents >> RIGHT AWAY <<
  let changeDueCents = changeDue * 100;

  // sum up all of the money(in cents) in the cash drawer
  const cashForChange = cid.reduce((acc, cashOnHand) => {
    return acc + cashOnHand[1] * 100
  }, 0);

  // if money in cid is the same as change due
  if (changeDueCents === cashForChange) {
    return {status: 'CLOSED', change: cid};
  }

  // calculate how much change can be given
  // Reverse the cid -- highest to lowest returned
  const changeCashOnHand = cid.reverse().map(([cashName, cashAmount]) => {
    // Instantiate the amount of money of that bill type as 0
    let totalCash = 0;
    // Get value of cashType
    const cashValue = MONEY_TABLE[cashName];
    // Convert amount to cents
    let amountInTill = Math.round(cashAmount * 100);
    
    // Loop: While the amount of that type of money is bigger than 0 and the value of the money is smaller than the amount of remaining change due
    while(amountInTill > 0 && cashValue <= changeDueCents) {
      // Add one bill's worth to the total
      totalCash += cashValue;

      // Subtract that amount from the change due
      changeDueCents -= cashValue;

      // Subtract that amount from the amount available in that value
      amountInTill -= cashValue;
    }
    return [cashName, totalCash / 100]; 
  }) // filter out all the coin or bill types that have 0 money
  .filter(([_, value]) => value > 0);
  // if there is still change due, we either don't have enough money or money types don't add up
  if (changeDueCents > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  return { status: 'OPEN', change: changeCashOnHand };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
