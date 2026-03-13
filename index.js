let incomes = JSON.parse(localStorage.getItem("incomes")) || [];
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addIncome(){

let name = document.getElementById("incomeName").value;
let amount = document.getElementById("incomeAmount").value;

if(name === "" || amount === "") return;

incomes.push({name,amount:parseFloat(amount)});

localStorage.setItem("incomes",JSON.stringify(incomes));

document.getElementById("incomeName").value="";
document.getElementById("incomeAmount").value="";

updateUI();
}

function addExpense(){

let name = document.getElementById("expenseName").value;
let amount = document.getElementById("expenseAmount").value;

if(name === "" || amount === "") return;

expenses.push({name,amount:parseFloat(amount)});

localStorage.setItem("expenses",JSON.stringify(expenses));

document.getElementById("expenseName").value="";
document.getElementById("expenseAmount").value="";

updateUI();
}

function updateUI(){

let incomeTable = document.getElementById("incomeTable");
let expenseTable = document.getElementById("expenseTable");

incomeTable.innerHTML="";
expenseTable.innerHTML="";

let totalIncome=0;
let totalExpense=0;
