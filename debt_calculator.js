function calculateDebtPayoff() {
    const currentDebt = document.getElementById('current-debt').value;
    const interestRate = document.getElementById('interest-rate').value / 100;
    const monthlyPayment = document.getElementById('monthly-payment').value;

    const months = Math.log(monthlyPayment / (monthlyPayment - currentDebt * interestRate / 12)) / Math.log(1 + interestRate / 12);
    const years = months / 12;

    document.getElementById('result').innerText = `It will take approximately ₹{years.toFixed(1)} years to pay off your debt.`;
}
