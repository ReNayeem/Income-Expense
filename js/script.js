// input values start
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const newInput = inputField.value
    return newInput
}
// input value end



// calculate button start
document.getElementById('calculate-button').addEventListener('click', function () {

    // input values start
    const incomeAmountValue = getInputValue('income-amount-input')
    const foodExpenseValue = getInputValue('food-expense-input')
    const rentExpenseValue = getInputValue('rent-expense-input')
    const clothExpenseValue = getInputValue('cloth-expense-input')
    // input values end

    // notify error start
    const notifyValidValue = document.getElementById('notify-valid-value')
    const totalExpenseNotify = document.getElementById('notify-total-expense')

    if (incomeAmountValue != parseFloat(incomeAmountValue) || foodExpenseValue != parseFloat(foodExpenseValue) || rentExpenseValue != parseFloat(rentExpenseValue) || clothExpenseValue != parseFloat(clothExpenseValue)) {
        notifyValidValue.style.display = 'block'
        totalExpenseNotify.style.display = 'none'
        totalExpenseNotify.style.display = 'none'
    }
    // notify error end

    else {
        // total expense start
        const totalExpense = document.getElementById('total-expense')
        const newTotalExpense = parseFloat(foodExpenseValue) + parseFloat(rentExpenseValue) + parseFloat(clothExpenseValue)
        if (incomeAmountValue >= newTotalExpense) {
            totalExpense.innerText = newTotalExpense

            // notify total expense error start
            totalExpenseNotify.style.display = 'none'
            notifyValidValue.style.display = 'none'
        }
        else {
            totalExpenseNotify.style.display = 'block'
            notifyValidValue.style.display = 'none'
            totalExpense.innerText = ""
        }
        // notify total expense error end
        // total expense end

        // total balance start
        const totalBalance = document.getElementById('total-balance')
        const newTotalBalance = parseFloat(incomeAmountValue) - parseFloat(newTotalExpense)
        if (newTotalBalance >= 0) {
            totalBalance.innerText = newTotalBalance
        }
        else {
            totalBalance.innerText = ""
        }
        // total balance end
    }
})
// calculate button end



// save button start
document.getElementById('save-button').addEventListener('click', function () {

    // input value start
    const saveInputValue = getInputValue('save-input')
    const incomeAmountValue = getInputValue('income-amount-input')
    // input value input end


    // notify total save error start
    const notifyTotalSave = document.getElementById('notify-total-save')
    const notifySaveValidValue = document.getElementById('notify-save-valid-value')

    if (saveInputValue != parseFloat(saveInputValue)) {
        notifySaveValidValue.style.display = 'block'
        notifyTotalSave.style.display = 'none'
    }
    // notify total save error end

    else {
        // total balance start
        const totalBalance = document.getElementById('total-balance')
        // total balance end

        // save amount start
        const saveAmount = document.getElementById('save-amount')
        const newSaveBalance = (parseFloat(saveInputValue) * parseFloat(incomeAmountValue)) / 100
        if (parseFloat(totalBalance.innerText) >= newSaveBalance) {
            saveAmount.innerText = newSaveBalance

            // notify total save error start
            notifyTotalSave.style.display = 'none'
            notifySaveValidValue.style.display = 'none'
        }
        else {
            notifyTotalSave.style.display = 'block'
            notifySaveValidValue.style.display = 'none'
            saveAmount.innerText = ""
        }
        // notify total save error end
        // save amount end

        // remaining balance start
        const remainingBalance = document.getElementById('remaining-balance')
        const newRemainingBalance = parseFloat(totalBalance.innerText) - parseFloat(saveAmount.innerText)
        if (saveAmount.innerText == "") {
            remainingBalance.innerText = ""
        }
        else {
            remainingBalance.innerText = newRemainingBalance
        }
        // remaining balance end
    }
})
// save button start



// error notify start
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