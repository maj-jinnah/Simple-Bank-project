document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please, provide a valid number!!!')
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotalElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    const currentDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    const currentBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})