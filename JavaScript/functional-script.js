// input values start
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const newInput = inputField.value
    return newInput
}
// input value end



// calculate button start
document.getElementById('calculate-button').addEventListener('click', function () {

    // income amount input start
    const incomeAmountValue = getInputValue('income-amount-input')
    // income amount input end

    // food expense input start
    const foodExpenseValue = getInputValue('food-expense-input')
    // food expense input end

    // rent expense input start
    const rentExpenseValue = getInputValue('rent-expense-input')
    // rent expense input end

    // cloth expense input start
    const clothExpenseValue = getInputValue('cloth-expense-input')
    // cloth expense input end

    // total expense start
    const totalExpense = document.getElementById('total-expense')
    const newTotalExpense = parseFloat(foodExpenseValue) + parseFloat(rentExpenseValue) + parseFloat(clothExpenseValue)
    totalExpense.innerText = newTotalExpense
    // total expense end

    // total balance start
    const totalBalance = document.getElementById('total-balance')
    const newTotalBalance = parseFloat(incomeAmountValue) - parseFloat(newTotalExpense)
    totalBalance.innerText = newTotalBalance
    // total balance end
})
// calculate button end



// save button start
document.getElementById('save-button').addEventListener('click', function () {
    // save input start
    const saveInputValue = getInputValue('save-input')
    // save input end

    // income amount input start
    const incomeAmountValue = getInputValue('income-amount-input')
    // income amount input end

    // save amount start
    const saveAmount = document.getElementById('save-amount')
    const newSaveBalance = (parseFloat(saveInputValue) * parseFloat(incomeAmountValue)) / 100
    saveAmount.innerText = newSaveBalance
    // save amount end
})