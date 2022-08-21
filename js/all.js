const getInputValue = (inputId) => {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const inputAmount = parseFloat(inputValue);
  inputField.value = "";
  return inputAmount;
};

const updateTextField = () => {
  const deposit = document.getElementById("deposit-total");
  const depositText = deposit.innerText;
  const depositValue = parseFloat(depositText);
};

document.getElementById("btn-deposit").addEventListener("click", () => {
  const inputAmount = getInputValue("deposit-field");
  //   deposit current balance
  const deposit = document.getElementById("deposit-total");
  const depositText = deposit.innerText;
  const depositValue = parseFloat(depositText);
  const totalDeposit = depositValue + inputAmount;
  deposit.innerText = totalDeposit;

  //  total balance in bank
  const currentBalance = document.getElementById("balance-total");
  const currentBalanceText = currentBalance.innerText;
  const currentBalanceValue = parseFloat(currentBalanceText);
  const totalBalance = currentBalanceValue + inputAmount;
  currentBalance.innerText = totalBalance;
});

// withdraw button click event
document.getElementById("btn-withdraw").addEventListener("click", () => {
  const withdrawValue = getInputValue("withdraw-field");

  //   withdraw current balance in stock
  const withdrawBalance = document.getElementById("withdraw-total");
  const withdrawBalanceText = withdrawBalance.innerText;
  const withdrawBalanceValue = parseFloat(withdrawBalanceText);
  const totalWithdraw = withdrawBalanceValue + withdrawValue;
  withdrawBalance.innerText = totalWithdraw;

  const currentBalance = document.getElementById("balance-total");
  const currentBalanceText = currentBalance.innerText;
  const currentBalanceValue = parseFloat(currentBalanceText);
  const totalCurrentBalance = currentBalanceValue - withdrawValue;
  currentBalance.innerText = totalCurrentBalance;
});
