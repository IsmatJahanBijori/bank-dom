// // get user withdraw and set withdraw
// // 1. addeventlistener for button
// document.getElementById('btn-deposit').addEventListener('click', function () {
//     // 2. to get input value, input field
//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmount = depositField.value;
//     // 120 nilam

//     // 3. get the current deposit total,set the new deposit amount which gets from input field text, $00(deposit-total)
//     const depositTotalElement = document.getElementById('deposit-total');
//     const previousDepositTotal = depositTotalElement.innerText;
//     // previous=00 chilo
//     depositTotalElement.innerText = newDepositAmount;
//     // 00 er poriborte 120 boshalam

//     // 4. add the numbers
//     const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
//     // current er moddhe 00+120=120
//     depositTotalElement.innerText = currentDepositTotal;
//     // 120 ta ekhon current value hisebe select korlam


//     // 5. get the current balance total,set the new balance amount which gets from input field text, $00(balance-total)
//     const balanceTotalElement = document.getElementById('balance-total');
//     // 1230 get korlam
//     const previousBalanceTotal = balanceTotalElement.innerText;
//     // 1230 ache previous er moddhe
    

//     // 6. add the numbers
//     const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
//     // current balance hisebe 1230+120=1350
//     balanceTotalElement.innerText = currentBalanceTotal;
//     // 1350 ekhon current balance total


//     // 7. clear the input field
//     depositField.value = '';




// })