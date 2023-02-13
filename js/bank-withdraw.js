// // get user deposit and set deposit
// // 1. addeventlistener for button
// document.getElementById('btn-withdraw').addEventListener('click', function () {
//     // 2. to get input value, input field
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWithdrawAmount = withdrawField.value;
// //    taka tulbo 100taka,ei value set korlam newWithdrawAmount er moddhe

//     // 3. get the current withdraw total,set the new withdraw amount which gets from input field text, $00(withdraw-total)
//     const withdrawTotalElement = document.getElementById('withdraw-total');
//     const previousWithdrawTotal = withdrawTotalElement.innerText;
//     // previous=00 chilo
//     withdrawTotalElement.innerText = newWithdrawAmount;
//     // 00 er poriborte 100 boshalam

//     // 4. add the numbers
//     const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
//     // current er moddhe 00+100=100
//     withdrawTotalElement.innerText = currentWithdrawTotal;
//     // 100 ta ekhon current value hisebe select korlam


//     // 5. get the current balance total,set the new balance amount which gets from input field text, $00(balance-total)
//     const balanceTotalElement = document.getElementById('balance-total');
//     // 1230 get korlam
//     const previousBalanceTotal = balanceTotalElement.innerText;
//     // 1230 ache previous er moddhe
   
//     // 6. add the numbers
//     const currentBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
//     // current balance hisebe 1230-120=1110
//     balanceTotalElement.innerText = currentBalanceTotal;
//     // 1110 ekhon current balance total


//     // 7. clear the input field
//     withdrawField.value = '';




// })