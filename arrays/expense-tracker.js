const account = {
  name: 'Rodrigo Coto',
  expenses: [],
  income: [],

  addIncome: function(description, amount) {
    const income = {
      description: description,
      amount: amount
    }
    this.income.push(income);
  },

  addExpense: function(description, amount) {
    const expense = {
      description: description,
      amount: amount
    }
    this.expenses.push(expense);
  },
  
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses += expense.amount;
    })
    this.income.forEach(function (income) {
      totalIncome += income.amount;
    })

    let balance = totalIncome - totalExpenses;
    

    return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses`
  }
}

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
account.addIncome('Job2', 1000);
console.log(account.getAccountSummary());