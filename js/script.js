//function for get all input value
function getInputValueIncomeExpense(amountof) {
    const inputTextValue = document.getElementById(amountof + '-input');
    const inputAmount = parseInt(inputTextValue.value);
    if (inputAmount >= 0) {
        inputTextValue.value = '';
        return inputAmount;
    } else {
        alert('Opps..! You have to give positive amount');
        inputTextValue.value = '';
        return getInputValueIncomeExpense();
    }
}

//clicked calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    //get input field value calling function
    var incomeInputValue = getInputValueIncomeExpense('income');
    var foodInputValue = getInputValueIncomeExpense('food');
    var rentInputValue = getInputValueIncomeExpense('rent');
    var clothesInputValue = getInputValueIncomeExpense('clothes');

    //get html text-field value
    const expanceTotalText = document.getElementById('expence-total');
    const expanceTotalValue = parseInt(expanceTotalText.innerText);

    const balanceTotalText = document.getElementById('balance-total');
    const balanceTotalValue = parseInt(balanceTotalText.innerText);

    //calculation balance and set to html with condition
    const expenses = foodInputValue + rentInputValue + clothesInputValue;
    if (incomeInputValue >= expenses) {
        expanceTotalText.innerText = expenses;
        const balance = incomeInputValue - expenses;
        balanceTotalText.innerText = balance;
        var balanceMessage = document.getElementById('balance-message');
        balanceMessage.style.display = 'none';

    } else {
        var balanceMessage = document.getElementById('balance-message');
        balanceMessage.style.display = 'block';
        expanceTotalText.innerText = '00';
        balanceTotalText.innerText = '00';
    }
})


//clicked save button
document.getElementById('save-button').addEventListener('click', function () {
    //get input field value calling function
    const saveInputParsentValue = getInputValueIncomeExpense('save');

    //get html text-field value
    const balanceTotalText = document.getElementById('balance-total');
    const balanceTotalValue = parseInt(balanceTotalText.innerText);

    const saveAmountText = document.getElementById('saving-total');
    const saveAmount = parseInt(saveAmountText.innerText);

    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalanceValue = parseInt(remainingBalanceText.innerText);

    //calculation remaining balance and set to html with condition
    if (balanceTotalValue > 0 && saveInputParsentValue <= 100) {
        const savingAmount = (balanceTotalValue * saveInputParsentValue) / 100;
        saveAmountText.innerText = savingAmount;
        const remainingBalance = balanceTotalValue - savingAmount;
        remainingBalanceText.innerText = remainingBalance;

    } else {
        saveAmountText.innerText = "You don't have sufficient balance for saving.";
        remainingBalanceText.innerText = balanceTotalValue;
    }

})
