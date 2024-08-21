function calculateDebtPayoff() {
    const currentDebt = parseFloat(document.getElementById('current-debt').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const monthlyPayment = parseFloat(document.getElementById('monthly-payment').value);

    if (isNaN(currentDebt) || isNaN(interestRate) || isNaN(monthlyPayment) || currentDebt <= 0 || interestRate < 0 || monthlyPayment <= 0) {
        document.getElementById('result').innerText = 'Please enter valid positive numbers for all fields.';
        return;
    }

    if (monthlyPayment <= currentDebt * interestRate / 12) {
        document.getElementById('result').innerText = 'Monthly payment is too low to pay off the debt. Increase your payment or check your inputs.';
        return;
    }

    const months = Math.log(monthlyPayment / (monthlyPayment - currentDebt * interestRate / 12)) / Math.log(1 + interestRate / 12);
    const years = months / 12;

    document.getElementById('result').innerText = `It will take approximately ${years.toFixed(1)} years to pay off your debt.`;
}
