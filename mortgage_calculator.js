function calculateMortgage() {
    const income = document.getElementById('income').value;
    const expenses = document.getElementById('expenses').value;
    const downPayment = document.getElementById('down-payment').value;
    const interestRate = document.getElementById('interest-rate').value / 100;
    const loanTerm = document.getElementById('loan-term').value;

    const maxMonthlyPayment = (income / 12) - expenses;
    const loanAmount = (maxMonthlyPayment / (interestRate / 12)) * (1 - Math.pow(1 + (interestRate / 12), -loanTerm * 12));
    const affordability = loanAmount + parseFloat(downPayment);

    document.getElementById('result').innerText = `You can afford a house worth up to ₹₹{affordability.toFixed(2)}.`;
}
