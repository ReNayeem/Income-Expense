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

    if (parseFloat(incomeAmountValue) < 0 || parseFloat(foodExpenseValue) < 0 || parseFloat(rentExpenseValue) < 0 || parseFloat(clothExpenseValue) < 0) {
        alert('Please input valid value')
    }
    else {
        // total expense start
        const totalExpense = document.getElementById('total-expense')
        const newTotalExpense = parseFloat(foodExpenseValue) + parseFloat(rentExpenseValue) + parseFloat(clothExpenseValue)
        if (incomeAmountValue >= newTotalExpense) {
            totalExpense.innerText = newTotalExpense
        }
        else {
            alert('Please input valid value')
        }
        // total expense end

        // total balance start
        const totalBalance = document.getElementById('total-balance')
        const newTotalBalance = parseFloat(incomeAmountValue) - parseFloat(newTotalExpense)
        if (newTotalBalance >= 0) {
            totalBalance.innerText = newTotalBalance
        }
        // total balance end
    }


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

    if (parseFloat(saveInputValue) < 0) {
        alert('Please input valid value')
    }
    else {
        // total balance start
        const totalBalance = document.getElementById('total-balance')
        // total balance end

        // save amount start
        const saveAmount = document.getElementById('save-amount')
        const newSaveBalance = (parseFloat(saveInputValue) * parseFloat(incomeAmountValue)) / 100
        if (parseFloat(totalBalance.innerText) >= newSaveBalance) {
            saveAmount.innerText = newSaveBalance
        }
        else {
            alert('Please input valid value')
        }
        // save amount end

        // remaining balance start
        const remainingBalance = document.getElementById('remaining-balance')
        const newRemainingBalance = parseFloat(totalBalance.innerText) - parseFloat(saveAmount.innerText)
        remainingBalance.innerText = newRemainingBalance
        // remaining balance end
    }
})


// error notify start
function isInputValid(inputId) {
    const checkInputValue = document.getElementById(inputId)
    const checkInputValueLength = checkInputValue.value.toString().length
    const notifyId = document.getElementById('notify')
    if (checkInputValueLength == 0) {
        notifyId.style.display = 'block';


    } else {
        if (parseInt(checkInputValue.value) < 0) {
            notifyId.style.display = 'block';
        } else {
            notifyId.style.display = 'none';
        }
    }
}


function isInputValidAnother(inputId, notifyId, notifyIdForString) {
    document.getElementById(inputId).addEventListener('keyup', function () {
        const showTyping = document.getElementById(inputId);
        const notifyError = document.getElementById(notifyId)
        const notifyErrorString = document.getElementById(notifyIdForString)
        if (showTyping.value < 0) {
            notifyError.style.display = 'block'
            notifyErrorString.style.display = 'none'
        }
        else if (showTyping.value != parseFloat(showTyping.value)) {
            notifyErrorString.style.display = 'block'
            notifyError.style.display = 'none'
        }
        else {
            notifyError.style.display = 'none'
            notifyErrorString.style.display = 'none'
        }
    })
}

isInputValidAnother('income-amount-input', 'notify-amount', 'notify-amount-string')
isInputValidAnother('food-expense-input', 'notify-food', 'notify-food-string')
isInputValidAnother('rent-expense-input', 'notify-rent', 'notify-rent-string')
isInputValidAnother('cloth-expense-input', 'notify-cloth', 'notify-cloth-string')
isInputValidAnother('save-input', 'notify-save', 'notify-save-string')
// error notify end