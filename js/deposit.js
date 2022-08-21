function getInputValue(inptId) {
  const iputText = document.getElementById(inptId);
  const depositAmountText = iputText.value;
  const depositAmount = parseFloat(depositAmountText);
  iputText.value = "";
  return depositAmount;
}

function getCurrentBalance() {
  const depositBalance = document.getElementById("balance-total");
  const depositBalanceText = depositBalance.innerText;
  const totalBalance = parseFloat(depositBalanceText);
  return totalBalance;
}

document.getElementById("btn-deposit").addEventListener("click", () => {
  const depositAmount = getInputValue("deposit-field");
  // get current deposit
  const depositTotal = document.getElementById("deposit-total");
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);
  depositTotal.innerText = previousDepositTotal + depositAmount;
});

document.getElementById("btn-withdraw").addEventListener("click", () => {
  const withdrawAmount = getInputValue("withdraw-field");

  const withdrawaTotal = document.getElementById("withdraw-total");
  const withdrawTotalText = withdrawaTotal.innerText;
  const previousWithDrawTotal = parseFloat(withdrawTotalText);
  withdrawaTotal.innerText = previousWithDrawTotal + withdrawAmount;
});
