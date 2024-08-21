function calculateMortgage() {
    
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const downPayment = parseFloat(document.getElementById('down-payment').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loan-term').value);

    if (isNaN(income) || isNaN(expenses) || isNaN(downPayment) || isNaN(interestRate) || isNaN(loanTerm) || 
        income <= 0 || expenses < 0 || downPayment < 0 || interestRate < 0 || loanTerm <= 0) {
        document.getElementById('result').innerText = 'Please enter valid positive numbers for all fields.';
        return;
    }

    const maxMonthlyPayment = (income / 12) - expenses;
    const monthlyInterestRate = interestRate / 12;

    if (maxMonthlyPayment <= 0) {
        document.getElementById('result').innerText = 'Income and expenses values lead to a non-positive maximum monthly payment.';
        return;
    }

    const loanAmount = (maxMonthlyPayment / monthlyInterestRate) * (1 - Math.pow(1 + monthlyInterestRate, -loanTerm * 12));
    const affordability = loanAmount + downPayment;

    document.getElementById('result').innerText = `You can afford a house worth up to ₹${affordability.toFixed(2)}.`;
}
