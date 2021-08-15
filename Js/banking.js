document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amoun deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDipositTotalText = depositTotal.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalText);
    const newDepositTotal = previousDipositTotal + newDepositAmount
    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalance = balanceTotalAmount + newDepositTotal;
    balanceTotal.innerText = newBalance;
    // clear input field
    depositInput.value = " ";
})

// handle withdraw  handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawTotalText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawTotalText);

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(withdrawAmountText);

    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    withdrawAmount.innerText = totalWithdraw;


    // total balance
    const totalBalance = document.getElementById('balance-total');
    const previousBalancetext = totalBalance.innerText;
    const preveiousBalanceTotal = parseFloat(previousBalancetext);
    const newBalance = preveiousBalanceTotal - newWithdrawAmount;
    totalBalance.innerText = newBalance;

    // clear input field
    withdrawInput.value = " ";
})
