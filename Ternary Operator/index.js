let purchaseAmount = window.prompt(`Enter purchase amount`);

let discount = purchaseAmount >= 100 ? 10 : 0;

finalAmount = purchaseAmount - purchaseAmount * (discount/100);

console.log(`Final Amount to pay : ${finalAmount}`)
