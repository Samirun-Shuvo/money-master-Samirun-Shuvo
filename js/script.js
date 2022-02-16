/* function getInputValueIncomeExpense(amountof) {
    const incomeInputText = document.getElementById(amountof + '-input');
    const incomeInputValue = parseFloat(incomeInputText.value);
}
function incomeExpensesCalculate() {
    var incomeAmount = getInputValueIncomeExpense('income');
    var foodCost = getInputValueIncomeExpense('food');
    var rentCost = getInputValueIncomeExpense('rent');
    var clothesCost = getInputValueIncomeExpense('clothes');

} */
//clicked calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    //get input field value 
    console.log('clicked');
    const incomeInputText = document.getElementById('income-input');
    const incomeInputValue = parseFloat(incomeInputText.value);
    console.log(incomeInputValue);

    const foodInputText = document.getElementById('food-input');
    const foodInputValue = parseFloat(foodInputText.value);
    console.log(foodInputValue);

    const rentInputText = document.getElementById('rent-input');
    const rentInputValue = parseFloat(rentInputText.value);
    console.log(rentInputValue);

    const clothesInputText = document.getElementById('clothes-input');
    const clothesInputValue = parseFloat(clothesInputText.value);
    console.log(clothesInputValue);

    //get html text-field value
    const expanceTotalText = document.getElementById('expence-total');
    const expanceTotalValue = parseFloat(expanceTotalText.innerText);
    console.log(expanceTotalValue);

    const balanceTotalText = document.getElementById('balance-total');
    const balanceTotalValue = parseFloat(balanceTotalText.innerText);
    console.log(balanceTotalValue);

    //calculation balance and set to html
    const expenses = foodInputValue + rentInputValue + clothesInputValue;
    expanceTotalText.innerText = expenses;
    const balance = incomeInputValue - expenses;
    balanceTotalText.innerText = balance;
})


//clicked save button
document.getElementById('save-button').addEventListener('click', function () {
    //get input field value
    const saveInputParsentText = document.getElementById('save-input');
    const saveInputParsentValue = parseFloat(saveInputParsentText.value);
    console.log(saveInputParsentValue);

    //get html text-field value
    const balanceTotalText = document.getElementById('balance-total');
    const balanceTotalValue = parseFloat(balanceTotalText.innerText);
    console.log(balanceTotalValue);

    const saveAmountText = document.getElementById('saving-total');
    const saveAmount = parseFloat(saveAmountText.innerText);
    console.log(saveAmount);

    const remainingBalanceText = document.getElementById('remaining-balance');
    const remainingBalanceValue = parseFloat(remainingBalanceText.innerText);
    console.log(remainingBalanceValue);

    //calculation remaining balance and set to html
    const savingAmount = (balanceTotalValue * saveInputParsentValue) / 100;
    saveAmountText.innerText = savingAmount;

    const remainingBalance = balanceTotalValue - savingAmount;
    remainingBalanceText.innerText = remainingBalance;
})
