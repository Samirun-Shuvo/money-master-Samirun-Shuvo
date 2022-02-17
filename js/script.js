function getInputValueIncomeExpense(amountof) {
    const inputTextValue = document.getElementById(amountof + '-input');
    const inputAmount = parseInt(inputTextValue.value);
    if (inputAmount >= 0) {
        inputTextValue.value = '';
        return inputAmount;
    } else {
        alert('Input Amout Will Be Positive');
    }

}
//clicked calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    //get input field value
    var incomeInputValue = getInputValueIncomeExpense('income');
    var foodInputValue = getInputValueIncomeExpense('food');
    var rentInputValue = getInputValueIncomeExpense('rent');
    var clothesInputValue = getInputValueIncomeExpense('clothes');

    //get html text-field value
    const expanceTotalText = document.getElementById('expence-total');
    const expanceTotalValue = parseInt(expanceTotalText.innerText);

    const balanceTotalText = document.getElementById('balance-total');
    const balanceTotalValue = parseInt(balanceTotalText.innerText);

    //calculation balance and set to html
    const expenses = foodInputValue + rentInputValue + clothesInputValue;
    if (incomeInputValue >= expenses) {
        expanceTotalText.innerText = expenses;
        const balance = incomeInputValue - expenses;
        balanceTotalText.innerText = balance;
    } else {
        alert('Income is low than Expence')
        expanceTotalText.innerText = '00';
        balanceTotalText.innerText = '00';
    }

})


//clicked save button
document.getElementById('save-button').addEventListener('click', function () {
    //get input field value
    const saveInputParsentValue = getInputValueIncomeExpense('save')


    //get html text-field value
    const balanceTotalText = document.getElementById('balance-total');
    const balanceTotalValue = parseInt(balanceTotalText.innerText);

    const saveAmountText = document.getElementById('saving-total');
    const saveAmount = parseInt(saveAmountText.innerText);

    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalanceValue = parseInt(remainingBalanceText.innerText);

    //calculation remaining balance and set to html

    if (balanceTotalValue >= 0 && balanceTotalValue >= saveInputParsentValue) {
        const savingAmount = (balanceTotalValue * saveInputParsentValue) / 100;
        saveAmountText.innerText = savingAmount;

        const remainingBalance = balanceTotalValue - savingAmount;
        remainingBalanceText.innerText = remainingBalance;
    } else {
        alert('Your balance is low')
        saveAmountText.innerText = '00';
        remainingBalanceText.innerText = '00';
    }

})
