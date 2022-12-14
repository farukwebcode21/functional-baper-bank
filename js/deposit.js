function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  inputField.value = "";
  return amountValue;
}
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}

document.getElementById("btn-deposit").addEventListener("click", () => {
  const depositAmount = getInputValue("deposit-field");
  const previousDepositTotal = getTextElementValueById("deposit-total");
  // calculate newdeposit total
  const newDepositTotal = previousDepositTotal + depositAmount;
  setTextElementValueById("deposit-total", newDepositTotal);
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + depositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});

// withdraw button even clik work

document.getElementById("btn-withdraw").addEventListener("click", () => {
  const newWithdrawAmount = getInputValue("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
