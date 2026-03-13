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

incomes.forEach(i=>{
incomeTable.innerHTML += `<tr><td>${i.name}</td><td>${i.amount}</td></tr>`;
totalIncome += i.amount;
});

expenses.forEach(e=>{
expenseTable.innerHTML += `<tr><td>${e.name}</td><td>${e.amount}</td></tr>`;
totalExpense += e.amount;
});

let profit = totalIncome - totalExpense;

document.getElementById("totalIncome").innerText=totalIncome;
document.getElementById("totalExpense").innerText=totalExpense;
document.getElementById("profitLoss").innerText=profit;

updateChart(totalIncome,totalExpense);

}

let chart;

function updateChart(income,expense){

if(chart) chart.destroy();

let ctx = document.getElementById("financeChart");

chart = new Chart(ctx,{
type:'pie',
data:{
labels:["Income","Expense"],
datasets:[{
data:[income,expense],
backgroundColor:["green","red"]
}]
}
});

}

updateUI();