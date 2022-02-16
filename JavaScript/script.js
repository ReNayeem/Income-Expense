// calculate button start
document.getElementById('calculate-button').addEventListener('click', function () {

    // income amount input start
    const incomeAmountInput = document.getElementById('income-amount-input')
    const incomeAmountValue = incomeAmountInput.value
    // income amount input end

    // food expense input start
    const foodExpenseInput = document.getElementById('food-expense-input')
    const foodExpenseValue = foodExpenseInput.value
    // food expense input end

    // rent expense input start
    const rentExpenseInput = document.getElementById('rent-expense-input')
    const rentExpenseValue = rentExpenseInput.value
    // rent expense input end

    // cloth expense input start
    const clothExpenseInput = document.getElementById('cloth-expense-input')
    const clothExpenseValue = clothExpenseInput.value
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

    // clear input value 
    // incomeAmountInput.value = ''
})