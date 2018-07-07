let myAccount = {
  name: 'Rodrigo Coto',
  expenses: 0,
  income: 0
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function (account, income) {
  account.income+= income;
};

let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  console.log(`Account for ${account.name} has $${balance}. $${account.income} in income. ${account.expenses} in expenses.`);
};

console.log('Initial account balance');
getAccountSummary(myAccount);
addIncome(myAccount, 1000);
console.log('Adding income');
getAccountSummary(myAccount);
addExpense(myAccount, 50);
console.log('Adding expense');
getAccountSummary(myAccount);
addExpense(myAccount, 50);
console.log('Adding expense');
getAccountSummary(myAccount);
resetAccount(myAccount);
console.log('Account reset it');
getAccountSummary(myAccount)
